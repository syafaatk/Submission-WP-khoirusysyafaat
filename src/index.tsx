import React from "react";
import ReactDOMClient from "react-dom/client";
import { FooterBigScreen } from "./screens/FooterBigScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FooterBigScreen />);
