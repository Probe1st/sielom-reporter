import { supabase } from "@/lib";
import ReportLayout from "../layouts/ReportLayout";
import { useEffect, useState } from "react";

export default function ReportPage() {
  const reportId = window.location.pathname.match(/[^/]+$/)[0];
  // console.log(reportId)

  const [reportCard, setReportCard] = useState();

  // getting reportCard
  useEffect(() => {
    function getReportCard() {
      supabase
        .from("reports")
        .select()
        .eq("id", reportId)
        .then((res) => {
          console.log(res.data[0])
          setReportCard(res.data[0]);
        });
    }
    getReportCard();
  }, []);

  return <ReportLayout reportCard={reportCard} />;
}
