import { supabase } from "@/lib";
import ReportLayout from "../layouts/ReportLayout";
import { useEffect, useState } from "react";
import { Report } from "@/services/Report";

export default function ReportPage() {
  const reportId = window.location.pathname.match(/[^/]+$/)[0];
  const [reportCard, setReportCard] = useState();

  // getting reportCard
  useEffect(() => {
    Report.getById(reportId).then((data) => {
      console.log(data[0]);
      setReportCard(data[0]);
    });
  }, []);

  return (
    <>
      {reportCard && <ReportLayout reportCard={reportCard} />}
    </>
  );
}
