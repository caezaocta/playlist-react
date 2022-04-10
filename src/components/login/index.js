const LoginButton = ({ header, href }) => {
    return (
        <>
            <a href={href} className="btn btn-outline-success">
                {header}
            </a>
        </>
    );
};

export default LoginButton;
