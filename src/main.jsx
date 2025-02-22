import ReactDOM from "react-dom/client";
import App from "./App";
// Import Swiper styles
import "swiper/css";
import "aos";
import "aos/dist/aos.css";
import reportWebVitals from "./reportWebVitals";
import "react-tooltip/dist/react-tooltip.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-modern-drawer/dist/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
import React from "react";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
