import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { Header } from './components/header/header';
import { Page404 } from './pages/page404';
import { useEffect, useState } from 'react';
import { DataService } from './services/data.service';
import { TaskInfo } from './models/models';

function App() {
  const [isAddTaskButtonShown, setShowAddTaskButton] = useState<boolean>(true);
  const [isTaskFormsExpanded, setTaskFormsExpanded] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await DataService.fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks()
  }, []);

  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<HomePage tasksData={tasks} setTasks={setTasks} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
