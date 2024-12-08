import "./App.css";
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SideBar from './SideBar';
import {handleTabClick} from './SideBar';
import DashContent from './Components/DashBoard/DashContent'
import POS from './Components/POS/POS'
import Inventory from './Components/Inventory/Inventory'
import BillInfo from './BillInfo/BillInfo';
import Category from './Components/Category/Category'
import GoodReceive from './Components/GoodReceive/GoodReceive'
import GoodReturn from './Components/GoodReturn/GoodReturn'



function App() {
  return (
    <div className>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/Side" element={<SideBar />} />
          <Route path="/dash" element={<DashContent />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/bill" element={<BillInfo />} />
          <Route path="/reservation" element={<GoodReceive />} />
          <Route path="/return" element={<GoodReturn />} />


        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;