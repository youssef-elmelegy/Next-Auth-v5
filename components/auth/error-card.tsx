import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWraper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWraper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center gap-x-2">
        <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />
        <p className="text-destructive">Invalid credentials!</p>
      </div>
    </CardWraper>
  );
};
