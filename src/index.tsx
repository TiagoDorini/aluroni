import React from "react"
import ReactDOM from "react-dom/client"
import "normalize.css"
import "./index.css"
import DishMenu from "./pages/DishMenu"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <DishMenu />
  </React.StrictMode>
)
