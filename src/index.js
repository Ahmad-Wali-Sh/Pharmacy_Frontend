import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles.css";
import 'react-notifications/lib/notifications.css';
import 'reactjs-popup/dist/index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
