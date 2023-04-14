import {Routes, Route} from 'react-router-dom'
import Pokemon from './components/pokemon';



function App() {



  return (
    <Routes>
      <Route path='/pokemon'>
      <Route path=':pokemonId' element={<Pokemon />} />
      </Route>
    </Routes>
  )

}

export default App;
