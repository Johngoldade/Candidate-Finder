import { useEffect, useState } from "react";
import ListItems from "./components/listItems";

const SavedCandidates = () => {

  const [candidateList, setCandidateList] = useState<Candidate[]>([])

  useEffect(() => {
    // copilot
    const userCandidates: Candidate[] = JSON.parse(localStorage.getItem('candidate') || '[]')
    setCandidateList(userCandidates)
  }, [])


  return (
    <>
      <h1>Potential Candidates</h1>
      {candidateList ? (candidateList.map((candidate) => (
        <ListItems name={candidate.name} login={candidate.login} location={candidate.location} avatar_url={candidate.avatar_url} email={candidate.email} html_url={candidate.html_url} company={candidate.company} bio={candidate.bio} id={candidate.id} getNext={candidate.getNext} saveAndGetNext={candidate.saveAndGetNext}/>
      ))) : <h4>"Oops, looks like you didn't save any candidates to view later!"</h4>}
    </>
  );
};

export default SavedCandidates;
