import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
