import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = 'https://dummyjson.com/test';

function App() {

  useEffect(()=>{

    const fun  = async () => {
      let data = await fetch(URL);
      data.json().then((json) => {
        console.log(json);
      })
    }

    fun();
      
  }, [])


  return ( <div className="App">
    <p>REST API</p>
  </div>
  )
}

export default App
