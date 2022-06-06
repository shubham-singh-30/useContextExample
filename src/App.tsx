import React, { useState, createContext } from "react";
import "./App.css";
import { Comp1 } from "./Comp1";
interface IState{
  user: string; 
  setUser: (user:string) => void;
}
let initialState:IState={
  user: "",
  setUser: (user:string) => {}
}
export const UserContext= createContext(initialState);

function App() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
        <h1>{`Hello ${user}!`}</h1>
        <Comp1 />
      </UserContext.Provider>
    </>
  );
}

export default App;
