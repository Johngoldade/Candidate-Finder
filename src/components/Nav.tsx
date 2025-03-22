import { Link } from 'react-router-dom'

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  // done
  return (
    <nav>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SavedCandidates">My Candidates</Link></li>
        </ul>
    </nav>
  )
};

export default Nav;
