// Import needs package items
import { useEffect, useState } from "react";
import ListItems from "./components/listItems";

const SavedCandidates = () => {
  // State variable for list of candidates
  const [candidateList, setCandidateList] = useState<Candidate[]>([])

  useEffect(() => {
    const userCandidates: Candidate[] = JSON.parse(localStorage.getItem('candidate') || '[]')
    setCandidateList(userCandidates)
  }, [])

  // Function to delete 
  const deleteCandidate = (id: number) => {
    console.log(id)
    let candidates: Candidate[] = JSON.parse(localStorage.getItem('candidate') || '[]')
    // Used CoPilot to help me debug line 20
    const newArr = candidates.filter(candidate => candidate.id !== id);
    const arr = JSON.stringify(newArr);
    localStorage.setItem('candidate', arr);
    setCandidateList(newArr);
  }

  // Render candidate list component
  return (
    <>
      <h1>Potential Candidates</h1>
      {candidateList.length ? (candidateList.map((candidate) => (
        <ListItems name={candidate.name} login={candidate.login} location={candidate.location} avatar_url={candidate.avatar_url} email={candidate.email} html_url={candidate.html_url} company={candidate.company} bio={candidate.bio} id={candidate.id} deleteProfile={deleteCandidate}/>
      ))) : <h5>Oops, looks like you don't have any candidates to view!</h5>}
    </>
  );
};

export default SavedCandidates;
