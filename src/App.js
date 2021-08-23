import logo from './logo.svg';
import './App.css';

import Links from './components/Links'
import LinkForm from './components/LinkForm';


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {



  return (
      <div>
        <div>          
          <Links />
        </div>

        <ToastContainer/>
      </div>
      

  );
}

export default App;
