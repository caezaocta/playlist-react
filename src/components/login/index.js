const LoginButton = ({ header, onClick, href }) => {
    return (
        <>
            <a
                href={href}
                onClick={onClick}
                className="btn btn-outline-success"
            >{header}
            </a>
        </>
    );
};

export default LoginButton;
