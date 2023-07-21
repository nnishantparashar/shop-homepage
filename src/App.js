import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import {createContext, useState} from 'react';

import "./App.css";

export const myContext = createContext(null);

function App() {

  const [cartCount, setCartCount] = useState(0);
  
  return (
    <myContext.Provider value={{cartCount, setCartCount}}>
      <div className="App">
        <Navbar />
        <Header />
        <Products />
        <Footer />
      </div>
    </myContext.Provider>
  );
}

export default App;
