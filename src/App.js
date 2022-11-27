import React from 'react'
import Form from './Components/Form';
import NavbarUp from'./Components/NavbarUp';
import Table from './Components/Table';
// import Table1 from './Components/Table1';
import Header from './Components/Header';
import Barchart from './Components/Barchart';
import Searchbar from './Components/Searchbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
function App() {
  return (
 <>
 <Header />
   <NavbarUp />
      <BrowserRouter>
      {/* <Sidebar/> */}
    
        <Routes>
          <Route path="/Form" exact element={<Form />} />
          <Route path="/Barchart" exact element={<Barchart />} />
          <Route path="/Table" exact element={<Table />} />
          <Route path="/Searchbar" exact element={<Searchbar />} />

        </Routes>
      </BrowserRouter>
            

   </>
  );
};

export default App;
