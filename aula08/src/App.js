import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './User/Users';
import User from './User/User';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
      </Route>
      <Route path='/user'>
        <Route index element={<Users />} />
        <Route path=':userId' element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
