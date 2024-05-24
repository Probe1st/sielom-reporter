import { supabase } from "@/lib";

class ReportsService {
  table_name = "reports";

  /**
   * get reports and return the array with them
   * @returns {Array}
   */
  async getAll() {
    return;
  }

  /**
   * get report by id and return the array with it
   * @param {number} id
   * @returns {Array}
   */
  async getById(id) {
    supabase.from(this.table_name);

    return;
  }

  /**
   * create the report and returns it
   * @param {object} data
   * @returns {object}
   */
  create(data) {
    return;
  }

  /**
   * update the report and returns it
   * @param {object} data
   * @param {number} id
   * @returns {object}
   */
  update(data, id) {
    return;
  }

  /**
   * Delete the report by id and returns it
   * @param {number} id
   * @returns {object}
   */
  delete(id) {
    return;
  }
}

export default ReportsService();
