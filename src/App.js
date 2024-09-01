
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './routes/HomePage';
import ServicesPage from './routes/ServicesPage';
import ContactPage from './routes/ContactPage';
import ClientsPage from './routes/ClientsPage';








function App() {
  return (
    <>
      <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Services" element={<ServicesPage/>}/>
        <Route path='/Clients' element={<ClientsPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
      
      

      
      
      </div>

    </> 
  );
}

export default App;
