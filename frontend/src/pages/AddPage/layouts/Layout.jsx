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
import { FormInput } from "lucide-react";

function Layout() {
    return (
        // <div className="flex flex-col items-center justify-center grow">addPage</div>
        <CardSkeleton />
    )
}

export default Layout;

function CardSkeleton() {
  const newLine = "\n";

  return (
    <div className="flex flex-row justify-center items-center grow whitespace-pre-line">
      <Card className={"w-[512px]"}>
        <CardHeader>
          <CardTitle className={"text-center mb-4"}>Создание задачи</CardTitle>
        </CardHeader>
        <CardContent>
            <FormInput>
            </FormInput>
          <Skeleton className="w-full h-16" />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
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
