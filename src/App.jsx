import './App.css';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<UserTable />} />
            <Route path='/AddUser' element={<AddUser />} />
            <Route path='/EditUser/:userId' element={<EditUser />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
