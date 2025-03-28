// Import the needed package items
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

// Return the App with the header, nav, and the body for whichever page corresponds to the current route
function App() {
  return (
    <>
      <header>
        <div className='header-div '>
          <h1 className='header-h1'>Candidate Finder</h1>
          <img src="recruitment.png" alt="Three sketches of individuals with a checkmarked arrow pointing to the middle person" className='header-img'></img>
        </div>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

