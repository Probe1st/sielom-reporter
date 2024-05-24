import { supabase } from "@/libs";
import ReportLayout from "../layouts/ReportLayout";

export default function ReportPage() {
  const reportId = window.location.pathname.match(/[^/]+/);
  const reportCard = supabase.from('reports').select()

  return <ReportLayout reportCard={reportCard} />;
}
