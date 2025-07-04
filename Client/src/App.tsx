import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeasonEvent from "./Pages/SeasonEvent/SeasonEvent";
import NewArrival from "./Pages/NewArrival/NewArrival";
import Trending from "./Pages/Trending/Trending";
import OurStory from "./Pages/OurStory/OurStory";
import Exclusive from "./Pages/Exclusive/Exclusive";
import Accessories from "./Pages/Accessories/Accessories";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import LogIn from "./Pages/LogIN/LogIn";
// import CartTry from "./Pages/Cart/CartTry";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";

import CartPage from "./Pages/Cart/CartPage";
import ProductDetail from "./Pages/ProductDetails/ProductDetails";

import CartTry from "./Pages/Cart/CartTry";
import BagCollection from "./Pages/BagCollection/BagCollection";
import MensCollection from "./Pages/MensCollection/MensCollection";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetail";
import Search from "./Pages/Search/Search";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Home from "./Pages/Home/Hero";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Wrap routes under Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Or Home if you add it */}
            <Route path="season-event" element={<SeasonEvent />} />
            <Route path="new-arrival" element={<NewArrival />} />
            <Route path="bag-collection" element={<BagCollection />} />
            <Route path="mens-collection" element={<MensCollection />} />
            <Route path="trending" element={<Trending />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="exclusive" element={<Exclusive />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<LogIn />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cartTry" element={<CartTry />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
