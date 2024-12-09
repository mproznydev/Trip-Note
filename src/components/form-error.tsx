import { AlertOctagon } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div
      className="bg-destructive/15 text-destructive text-sm 
      rounded-md p-3 flex flex-row gap-x-2 items-center"
    >
      <AlertOctagon className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
