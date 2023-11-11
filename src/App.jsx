import { useState} from 'react'
import axios from "axios"
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import Profile from './components/Profile'
import Data from './components/Data';
function App() {


  const [count, setCount] = useState(0)


  //ข้อมูลสำหรับทดสอบ
  const user = {
    username : 'บอส',
    firstname : 'wachakorn' ,
    lastname : 'ponprom' ,
    tel : '0629716426' 
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];





  return (
  <>
  <h1 style={{color : 'red'}}>ทดสอบ React</h1>
    {/* <MyButton /> */}
    ดึงข้อมูลมาจาก
    <a href='https://api.publicapis.org/entries'> https://api.publicapis.org/entries</a>
    <Profile user= {user}/>
    <p>-</p><p>-</p> 
    <Data/>
 </>
  )
}

export default App
