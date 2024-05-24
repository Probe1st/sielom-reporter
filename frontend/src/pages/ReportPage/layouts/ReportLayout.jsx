import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ReportLayout({ reportCard }) {
  let cardString = "";

  for (let key in reportCard) {
    cardString += key + ": " + reportCard[key] + "\n";
  }

  console.log(cardString);

  const audience = "";

  return (
    <div className="whitespace-pre-line">
      <Card>
        <CardHeader>
          <CardTitle>Заявка номер {reportCard?.id}</CardTitle>
          <CardDescription>
            <p>Статус {reportCard?.statuses_id}</p>
            <p>Приоритет {reportCard?.priorities_id}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Аудитория {reportCard?.audiences_id}</p>
          <br />

          <h3>Описание</h3>
          <p>{reportCard?.description}</p>
        </CardContent>
        <CardFooter>
          <div className="whitespace-pre-line">
            Репортер {reportCard?.reporter_user_id}
            {reportCard?.admin_user_id && reportCard?.admin_user_id}
            Создано
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
