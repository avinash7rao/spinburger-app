import logo from "./logo.svg";
import "./App.css";
import { About, Basket, Login, Contact, Menu } from "./Components";

import {
  Routes, // instead of "Switch"
  Route,
  useLocation,
} from "react-router-dom";

const posname = "AgencyQ Spin Burger";

function App() {
  const location = useLocation();
  var viewEvent = {
    browser_id: Boxever.getID(),
    channel: "WEB",
    type: "VIEW",
    language: "EN",
    currency: "USD",
    page: location.pathname,
    pos: posname,
  };

  viewEvent = window.Boxever.addUTMParams(viewEvent);
  window.Boxever.eventCreate(viewEvent, function (data) {}, "json");
  console.log(viewEvent);

  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
