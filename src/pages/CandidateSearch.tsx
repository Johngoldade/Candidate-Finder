import { useState, useEffect } from 'react';
import { searchGithub} from '../api/API';
// , searchGithubUser 

const CandidateSearch = () => {
  
  const [candidate, setCandidate] = useState<Candidate>()

  useEffect(() => {
    const getCandidate = async () => {
      const profile: Candidate = await searchGithub()
      setCandidate(profile)
      return
    }
    getCandidate()
  }, [])

  if (candidate) {
    return (
      <>
        <h1>CandidateSearch</h1>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg"/>
                <span className="card-title">Card Title</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return(
      <>
        <h1>CandidateSearch</h1>
        <h5>No Candidates Found!</h5>
      </>
    )
  }
};

export default CandidateSearch;
