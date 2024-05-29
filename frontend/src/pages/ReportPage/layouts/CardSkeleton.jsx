import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
  const newLine = "\n";

  return (
    <div className="flex flex-row justify-center items-center grow whitespace-pre-line">
      <Card className={"w-[512px]"}>
        <CardHeader>
          <CardTitle className={"text-center mb-4"}>Карточка задачи</CardTitle>
          <CardDescription className="flex flex-col space-y-1">
            <Skeleton className={"h-[0.75rem] w-1/3"} /> {newLine}
            <Skeleton className={"h-[0.75rem] w-1/3"} /> {newLine}
            <Skeleton className={"h-[0.75rem] w-1/3"} /> {newLine}
            <Skeleton className={"h-[0.75rem] w-1/3"} />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3>Описание</h3>
          <Skeleton className="w-full h-16" />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          {/* information about reporter, admin and times */}
          <div className="whitespace-pre-line w-full">
            <h3>Информация о репорте</h3>

            <div className="flex flex-col space-y-1">
              <Skeleton className={"h-[0.75rem] w-1/3"} />
              <Skeleton className={"h-[0.75rem] w-1/3"} />
            </div>

            <br />

            <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
              <Skeleton className={"h-[0.75rem] w-1/5"} />
              <Skeleton className={"h-[0.75rem] w-1/5"} />
              <Skeleton className={"h-[0.75rem] w-1/5"} />
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row space-x-5 justify-end w-full mt-5">
            <Skeleton className={buttonVariants({variant: 'default', className: 'w-24'})} />
            {/* <Skeleton className={buttonVariants({variant: 'default', className: 'w-24'})} /> */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
