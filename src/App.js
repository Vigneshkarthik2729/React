import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import Products from './components/product/product';
import Login from './components/login/login';
import Footer from './components/footer/footer';
import img1 from '../src/components/image/briyani.jpeg';
import img2 from '../src/components/image/buffets.jpg';
import img3 from '../src/components/image/cappaccino.jpg';
import img4 from '../src/components/image/cupcakes.jpg';
import img5 from '../src/components/image/ghee.jpg';
import img6 from '../src/components/image/meals.jpg';
import Body from './components/body/body';
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const images = [img1, img2, img3, img4, img5, img6]

  // const order = [
  //   {
  //     img:img,
  //     item: "Noodles",
  //     offer: 20,
  //     restaurant: "Taj Hotel",
  //     price: 210
  //   },
  //   {
  //     item: "Cold Coffee",
  //     offer: 10,
  //     restaurant: "Cafe Bar",
  //     price: 110
  //   },
  //   {
  //     item: "Ice-Cream",
  //     offer: 10,
  //     restaurant: "Arun Ice-Creams",
  //     price: 150
  //   },
  //   {
  //     item: "Biriyani",
  //     offer: 25,
  //     restaurant: "Hotel Azad",
  //     price: 250
  //   }
  // ]

  const [isLoggedin, setLoggedIn] = useState(false);
  const loginHandler = (islogin) => {
    setLoggedIn(islogin);
  }
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoggedIn(localStorage.getItem('login'))
    fetch('https://6314c7e8fa82b738f74e0f19.mockapi.io/hotel').then((response) => {
      return response.json()

    }).then((data) => {
      data.forEach((dat, i) => {
        dat.image = images[i % images.length]
      })
      setItems([...data])
      console.log(data);
    })
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/logout" index element={<Login isLoggedin={loginHandler} />}></Route>
      <Route path="/header" element={<Header></Header>}>
      <Route path='body' element={<Body input={items}></Body>}></Route>
      <Route path="logout" element={<Products logout={loginHandler} />}></Route>
      </Route>
      <Route path="/footer" element={<Footer></Footer>}/>
      </Routes >
      {/* // <div className='container'>
      //   {isLoggedin =='true'? <Products logout={loginHandler} /> : <Login isLoggedin={loginHandler} />}
      // </div> */}
    </div >

  );
}

export default App;