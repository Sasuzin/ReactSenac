import React from 'react';
import {Routes, Route} from 'react-router-dom'
import NotFound from './NotFound';
import Home from './Home';
import DadosContext from './DadosContext';
import Random from './Random';

function App() {
  const [dados, setDados] = React.useState();

  function carregarApi(){
      fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) =>{
        setDados(data);
      });
    }

    React.useEffect(()=>{
      carregarApi();
    },[]);
  
  return (
    <DadosContext.Provider value={ dados }>
      <Routes>
        <Route path="/">
        <Route index element={<Home />} />
        <Route path="random" element={<Random />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DadosContext.Provider>
  );
}

export default App;
