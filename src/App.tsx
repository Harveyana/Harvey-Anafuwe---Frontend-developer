import { Routes, Route } from "react-router-dom";
import Index from './pages';
import WeatherPage from './pages/weatherPage';
import './index.css'
import "./App.css";

const App = () => {
 return (
    <>

       <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/weather" element={<WeatherPage />} />
       </Routes>
       
    </>
 );
};

export default App;


