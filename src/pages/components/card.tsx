
export default function Cards({ avatar_url, name, login, location, email, html_url, company, saveAndGetNext, getNext}: Candidate) {
    
    return (
        <>
        <div className="card-page">
            <h1>CandidateSearch</h1>
            <div className="row ">
                {/* <div className="col s3"></div> */}
                <div className="col s12 ">
                    <div className="card card-size">
                        <div className="card-image">
                            {avatar_url ? (<img src={avatar_url}/>) : <div className="card-img-alt">No Image Available</div> }
                        </div>
                        {name || login ? (
                            <h4 className="card-head">{name} ({login})</h4>
                        ) : <h4 className="card-head">Name & Login not Available</h4>}
                        <div className="card-content card-txt">
                            {location ? (<p><b>LOCATION:</b> {location}</p>) : <p><b>LOCATION:</b> Not Available</p>}
                            {email ? (<p><b>EMAIL:</b> {email}</p>) :<p><b>EMAIL:</b> Not Available</p>}
                            {html_url ? (<p><b>URL:</b> {html_url}</p>) : <p><b>URL:</b> Not Available</p>}
                            {company ? (<p><b>COMPANY:</b> {company}</p>) : <p><b>COMPANY:</b> Not Available</p>}
                        </div>
                        <div className="button-div">
                            <button className="btn-floating waves-effect waves-light red material-icons" onClick={getNext}>-</button>
                            <button className="btn-floating waves-effect waves-light green material-icons" onClick={saveAndGetNext}>+</button>
                        </div>
                    </div>
                </div>
                {/* <div className="col s3"></div> */}
            </div>
        </div>
        </>
            );
}