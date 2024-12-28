import {Navbar} from "./components/Navbar.jsx";
import {Footer} from "./components/Footer.jsx";
import {CartProvider} from "./components/CartContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home.jsx";
import {Checkout} from "./views/Checkout.jsx";
import {Profile} from "./views/Profile.jsx";
import {BookDetail} from "./views/BookDetail.jsx";
import {CartSidebar} from "./components/CartSidebar.jsx";

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/detail/:id" element={<BookDetail/>}/>
            </Routes>
            <CartSidebar/>
            <Footer/>
          </div>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;