// List item component to export
export default function ListItems ({ id, name, login, location, avatar_url, email, html_url, company, bio, deleteProfile }: Candidate) {

    return (
        <>
            <div className="list-container">
                <div>
                    {avatar_url ? (<img src={avatar_url} className="list-div"/>) : <div className="list-div">No Image Available</div> }
                </div>
                <div>
                    {name || login ? (<h5 className="list-div"><b>{name} ({login})</b></h5>) : <h5 className="list-div"><b>Name or Username not Available</b></h5>}
                </div>
                <div>
                    {bio ? (<p className="list-div">{bio}</p>) : <p className="list-div">Biography not Available</p>}
                </div>
                <div>
                    {email ? (<p className="list-div">{email}</p>) : <p className="list-div">Email not Available</p>}
                </div>
                <div>
                    {html_url ? (<p className="list-div">{html_url}</p>) : <p className="list-div">URL not Available</p>}
                </div>
                <div>
                    {location ? (<p className="list-div">{location}</p>) : <p className="list-div">Location not Available</p>}
                </div>
                <div>
                    {company ? (<p className="list-div">{company}</p>) : <p className="list-div">Company not Available</p>}
                </div>
                <div>
                    {/* Used CoPilot to help build this type check */}
                    <button onClick={() => deleteProfile && deleteProfile(id)} className="del-button">DELETE</button>
                </div>
            </div>
        </>
    )
}