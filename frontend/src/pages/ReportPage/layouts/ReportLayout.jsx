import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDate, getMonth, getYear } from "date-fns";

export default function ReportLayout({ reportCard }) {
  const newLine = "\n";

  const {
    id,
    admin_user_id,
    reporter_user_id,
    statuses_id,
    priorities_id,
    audiences_id,
    description,
    created_at,
    accepted_at,
    completed_at,
  } = reportCard;

  return (
    <div className="flex flex-row justify-center items-center grow whitespace-pre-line">
      <Card className={"w-[512px]"}>
        <CardHeader>
          <CardTitle className={"text-center mb-4"}>Карточка репорта</CardTitle>
          <CardDescription>
            Репорт: <span className="text-white">{id}</span> {newLine}
            Статус: <span className="text-white">{statuses_id}</span> {newLine}
            Приоритет: <span className="text-white">{priorities_id}</span>{newLine}
            Аудитория: <span className="text-white">{audiences_id}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3>Описание</h3>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {/* information about reporter, admin and times */}
          <div className="whitespace-pre-line w-full">
            <h3>Информация о репорте</h3>

            <div className="flex flex-col">
              <p>Репортер: {reporter_user_id}</p>
              <p>{admin_user_id && "Админ: " + admin_user_id}</p>
            </div>

            <br />

            <div className="text-sm text-muted-foreground">
              <Times
                created_at={created_at}
                accepted_at={accepted_at}
                completed_at={completed_at}
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row space-x-5 justify-end w-full mt-5">
            <Button>Принять</Button>
            <Button>Изменить</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function formatDateTime(timestamptz) {
  const dateTime = new Date(timestamptz);
  const [date, time] = [
    getDate(dateTime) +
      "." +
      (getMonth(dateTime) + 1 < 10
        ? "0" + (getMonth(dateTime) + 1)
        : getMonth(dateTime) + 1) +
      "." +
      getYear(dateTime),
    String(dateTime.getHours()) + ":" + String(dateTime.getMinutes()),
  ];

  return `${date} ${time}`;
}

function Times({ created_at, accepted_at, completed_at }) {
  const timestampt_strings = [
    created_at && "Создано " + formatDateTime(created_at),
    accepted_at && "Создано " + formatDateTime(accepted_at),
    completed_at && "Создано " + formatDateTime(completed_at),
  ];

  return timestampt_strings.reduce(
    (accum, timestampt) =>
      timestampt !== null ? accum + timestampt + "\n" : accum,
    ""
  );
}
