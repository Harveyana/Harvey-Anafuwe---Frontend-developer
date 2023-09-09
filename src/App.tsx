import { Routes, Route } from "react-router-dom";
import Index from './pages';
import './index.css'
import "./App.css";

const App = () => {
 return (
    <>

       <Routes>
          <Route path="/" element={<Index />} />
       </Routes>
       
    </>
 );
};

export default App;


