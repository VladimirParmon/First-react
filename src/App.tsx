import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { Header } from './components/header/header';
import { Page404 } from './pages/page404';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
