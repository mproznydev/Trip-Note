import { CheckCircle2 } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export default function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div
      className="bg-emerald-500/15 text-emerald-500 text-sm 
      rounded-md p-3 flex flex-row gap-x-2 items-center"
    >
      <CheckCircle2 className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
