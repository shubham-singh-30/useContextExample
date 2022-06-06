import React,{useState,createContext} from "react";
import { Comp2 } from "./Comp2";

export const Comp1 = () => {
    const [text,setText]= useState<Number>()
  return (
    <>

      <div>Comp1</div>
      <Comp2 />
    </>
  );
};
