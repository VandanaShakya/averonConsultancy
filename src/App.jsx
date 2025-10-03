import Home from './pages/Home.jsx' 
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/Routes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App