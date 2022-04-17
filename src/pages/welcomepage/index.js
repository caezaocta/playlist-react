import Navbar from "../../components/navbar/index.tsx";

const WelcomePage = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="row d-flex justify-content-center ">
                <div className="col-12">
                    <h1>Welcome Page</h1>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
