import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import Cart from './components/Cart';
import Shop from './components/Shop';
import SingleProduct from './components/Single Product'
const theme = {
  colors: {
    
  },
};
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="product/:id" element={<SingleProduct/>} />
        </Route>
      </Routes>
      
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
