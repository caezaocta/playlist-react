import { Button } from "@mui/material";

type LoginButtonProps = {
  header: string;
  href: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({ header, href }) => {
  return (
    <>
      <Button href={href} className="btn btn-outline-success">
        {header}
      </Button>
    </>
  );
};

export default LoginButton;
