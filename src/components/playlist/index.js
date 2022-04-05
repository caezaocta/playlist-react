const Playlist = ({ img, title, desc }) => {
    return (
        <>
            <div className="card">
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <img src={img} alt="" width={"90px"} height={"90px"} />
                    </div>
                    <div className="col-6">
                        <h6 className="">{title}</h6>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Playlist;