// Interface for the Candidate objects returned by the API
interface Candidate {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    name: string,
    company: string,
    bio?: string,
    location: string,
    email: string,
    saveAndGetNext?: () => void
    getNext?: () => void 
    deleteProfile?: (id: number) => void
}

// Interface for the users returned from the GitHub search
interface Users {
    login: string
}