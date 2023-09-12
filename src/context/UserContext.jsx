import { createContext, useState } from "react";
import UserData from "../components/Users";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(UserData);

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
