import { CardWraper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWraper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an acount?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWraper>
  );
};

export default LoginForm;
