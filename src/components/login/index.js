import { Button } from "@mui/material"

const LoginButton = ({ header, href }) => {
    return (
        <>
            <Button href={href} className="btn btn-outline-success">
                {header}
            </Button>
        </>
    );
};

export default LoginButton;
