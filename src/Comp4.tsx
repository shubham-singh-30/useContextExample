import React, { createContext, useContext } from "react";
import { UserContext } from "./App";

export const Comp4 = () => {
  const user = useContext(UserContext);
  return <>{user.user}
  <button onClick={()=>user.setUser("hellooo from component 4 ")}>Hello</button>
  </>;
};
