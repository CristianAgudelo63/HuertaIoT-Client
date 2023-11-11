import { Routes, Route } from "react-router-dom";
import { UserAuth } from "./../../context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Block from "./Controls/Block";
import Switch from "./Controls/Switch";

const Controls = () => {

  const { user } = UserAuth();
  const navigate = useNavigate();

  const RequireAuth = ({children}) => {
    return user ? children : <Block/>
  }

  useEffect(() => {
    if (user != null){
      navigate("/")
    }
  },[user])
  
  return (
    <Routes>
      <Route path="/" element={
        <RequireAuth>
          <Switch/>
        </RequireAuth>
      } />
    </Routes>
  );
}

export default Controls;