import './App.css';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import HeroNavigationBar from './Components/UI/Navigation/HeroNavigationBar/HeroNavigationBar';

// Depending on the mode and on which tab is selected, will affect which page is being rendered here
function App() {
  return (
    <main>
      <HeroNavigationBar />
      <LandingPage />
    </main>
  );
}

export default App;
