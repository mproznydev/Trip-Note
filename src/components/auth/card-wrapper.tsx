import BackButton from "@/components/auth/back-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export default function CardWrapper({
  children,
  title,
  description,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) {
  return (
    <Card className="w-full max-w-[400px] mx-3">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
