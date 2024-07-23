import './App.css';
import LandingPage from './Components/Slices/LandingPage';
import ProjectsPage from './Components/Slices/ProjectsPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <LandingPage />
      <ProjectsPage />
      {/* </header> */}
    </div>
  );
}

export default App;
