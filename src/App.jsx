// import { useState } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import AddUser from './components/AddUser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from './components/EditUser';
import { useState } from 'react';
import UserData from './components/Users';

function App() {
  const [userList, setUserList] = useState(UserData)

  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<UserTable userList={userList} />} />
        <Route path='/AddUser' element={<AddUser setUserList={setUserList} />} />
        <Route path='/EditUser' element={<EditUser userList={userList}/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
