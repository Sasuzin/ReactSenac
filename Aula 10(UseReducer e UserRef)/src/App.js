import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './page/Home';
import NotFound from './page/NotFound';
import Random from './page/Random';
import { UserContext } from "./context/UserContext";
import Todo from "./page/Todo";

function App() {
  const [dados, setDados] = useState();
  
  function Atualizar(){
    fetch('https://randomuser.me/api')
    .then((res)=>res.json())
    .then((dados)=>{
      setDados(dados.results[0]);
    });
  }

  useEffect(()=>{
    Atualizar();
  },[]);
  

  return (
    <UserContext.Provider value={dados}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>

  );
}

export default App;
