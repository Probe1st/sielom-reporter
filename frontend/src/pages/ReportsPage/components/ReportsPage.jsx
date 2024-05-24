import ReportsLaout from "../layouts/ReportsLayout";
import { supabase } from "@/libs";
import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [reports, setReports] = useState();

	// getReports()

  async function getReports() {
    // let { data: reports, error } =
    await supabase
      .from("audiences")
      .select("*")
      .then((data) => {
				setReports(data);
			});

  }

  return (
    <ReportsLaout
    // reports={reports ? reports : error}
    />
  );
}
