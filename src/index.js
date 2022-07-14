import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard';
import './style.css';

function Run() {
  return (
    <Dashboard/>
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<Run />);