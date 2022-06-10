import './App.css';
import VegetableDetails from './Components/Vegetables_Details';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Grocery_Trend5 from './Components/Grocery_Trends';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import api from "./api/api";

function App() {

  const [grocery, setGrocery] =  useState({name:""});


  const getGroceryTrend = (name) => {
    setGrocery({name : name})
    console.log(name);
  }

  const saveGroceriess = async () => {
    const response = await api.post('/grocery');
    console.log(response.data)
    return response.data;
}

        useEffect(  () => {
        const getGroceries = async () => {
            const allgrocery = await saveGroceriess();
        };
        getGroceries();
        }, [])

  return(
    <div>
        <Router>
          <Routes>
            <Route path="/" 
            exact
            element={<VegetableDetails getGroceryTrend={getGroceryTrend} grocery={grocery}/>}
            />
            <Route path="/final" 
            element={<Grocery_Trend5  grocery={grocery}/>}
            />
          </Routes>
        </Router>
    </div>
  )
}

export default App;
