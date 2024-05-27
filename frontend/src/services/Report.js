import { supabase } from "@/lib";

class ReportModel {
  table_name = "reports";

  /**
   * get reports and return the array with them
   * @returns {Array}
   */
  async getAll() {
    const data = await supabase
      .from(this.table_name)
      .select()
      .then((res) => res.data);

    return data;
  }

  /**
   * get report by id and return the array with it
   * @param {number} id
   * @returns {Array}
   */
  async getById(id) {
    const data = await supabase
      .from(this.table_name)
      .select()
      .eq("id", id)
      .then((res) => res.data);

    return this.dataPreparator(data);
  }

  /**
   * create the report and returns response with the status
   * @param {object} data
   * @returns {object}
   */
  async create(data) {
    const res = await supabase.from(this.table_name).insert([data]);

    return res;
  }

  /**
   * update the report and returns response with the status
   * @param {object} data
   * @param {number} id
   * @returns {Object}
   */
  async update(data, id) {
    const res = await supabase.from(this.table_name).update(data).eq("id", id);

    return res;
  }

  /**
   * Delete the report by id and returns response with the status
   * @param {number} id
   * @returns {object}
   */
  async delete(id) {
    const res = await supabase.from(this.table_name).delete().eq("id", id);

    return res;
  }

  /**
   *
   * @param {Array} data
   * @returns {Array}
   */
  async dataPreparator(data) {
    let outputArr = [];

    for (let i = 0; i < data.length; i++) {
      let record = {};

      for (let key in data[i]) {
        // if key is "id" or have not "id"
        // in the end of the key
        // we assign a value of the field
        // to the record variable
        if (key.match(/[^(id)]+$/) !== null) {
          record[key] = data[i][key];
          continue;
        } else if (key === "id" || data[i][key] === null) {
          record[key] = data[i][key];
          continue;
        }

        const id = data[i][key];

        const findUserField = key.match(/_([^_]+)_/)?.[1];
        let table = "";

        if (findUserField) {
          table = findUserField + "s";
        } else {
          const findOtherField = key.match(/^[^_]+/)[0];
          table = findOtherField;
        }

        const res = await supabase.from(table).select("name").eq("id", id);

        record[key] = res.data[0].name;
      }

      outputArr.push(record);
    }

    // console.log(outputArr)
    return outputArr;
  }
}

export const Report = new ReportModel();
