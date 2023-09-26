// src/App.jsx
import './App.css';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="React-Crud-App/" element={<UserTable />} />
          <Route path="React-Crud-App/AddUser" element={<AddUser />} />
          <Route path="React-Crud-App/EditUser/:userId" element={<EditUser />} />
        </Routes>
      </Router>
  );
}

export default App;
