import ReactDOM from 'react-dom/client';
import Builder from './components/Builder';
import './style.css';
//import { BrowserRouter } from "react-router-dom";

function Run() {
  return (
    <BrowserRouter>
      <Builder />
    </BrowserRouter>
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Run />);