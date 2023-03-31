
import Video from './Video';
import Header from './Header';
import Buscar from './Buscar';
import { VideoContext } from './VideoContext';
import {Videos} from './data/Videos';

function App() {
 return ( <div className='container'>
  <VideoContext.Provider value={Videos}>
            <Header />
            <Buscar />
            <Video />
  </VideoContext.Provider>
 </div>
 );
}

export default App;
