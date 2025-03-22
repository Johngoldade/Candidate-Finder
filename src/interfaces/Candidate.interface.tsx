// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    name: string,
    company: string,
    biography: string,
    location: string,
    email: string,
}