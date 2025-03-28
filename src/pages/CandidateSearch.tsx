import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Cards from './components/card';
//  

const CandidateSearch = () => {
  
  const [candidate, setCandidate] = useState<Candidate>({} as Candidate)
  const [users, setUsers] = useState<Users[]>([])
  const [isCandidate, setIsCandidate] = useState<Boolean>(false)

  useEffect(() => {
    const chooseCandidates = async () => {
      const profile: Users[] = await searchGithub()

      // localStorage.setItem('candidate', JSON.stringify([]))
    
      const renderFirstUser = async () => {
        const user: Users | undefined = profile.pop()
        setUsers(profile)
        if (user) {
          const login: string = user.login
          const userData = await searchGithubUser(login)
          setCandidate(userData)
          setIsCandidate(true)
        } else {
          setIsCandidate(false)
        }
      }
      await renderFirstUser()
      return
    }
    chooseCandidates()
    }, [])

    const getNextUser = async () => {
      const nextUser: Users | undefined = users.pop()
      if (nextUser) {
        const nextLogin: string = nextUser.login
        const nextUserData = await searchGithubUser(nextLogin)
        setCandidate(nextUserData)
        setIsCandidate(true)
      } else {
        setIsCandidate(false)
        console.log('No candidates')
      }
    }

  const saveCandidate = () => {
    let storedCandidates: Candidate[]  = JSON.parse(localStorage.getItem('candidate') || '[]')
    storedCandidates.push(candidate)
    localStorage.setItem('candidate', JSON.stringify(storedCandidates))
    getNextUser()
  }


  const moveToNextCandidate = () => {
    getNextUser()
  }

  
  if (isCandidate) {
    return (
      <Cards login={candidate.login} name={candidate.name} avatar_url={candidate.avatar_url} html_url={candidate.html_url} company={candidate.company} location={candidate.location} email={candidate.email} saveAndGetNext={saveCandidate} getNext={moveToNextCandidate} id={candidate.id} bio={candidate.bio}/>
    )
  } else {
    return(
      <>
        <h1>CandidateSearch</h1>
        <h5>No more candidates here ... Reload the page to view more profiles!</h5>
      </>
    )
  }
}
 

export default CandidateSearch;
