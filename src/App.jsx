import { Header } from "./Header"
import { ShopComponent } from "./ShopComponent"
import { MenuComponent } from "./MenuComponent"
import { useContext } from "react";
import {ModelsContext} from "./context/ModelsContext";
import { InfoComponent } from "./InfoComponent";
import "./assets/sass/style.scss"

function App() {

  const { menu } = useContext(ModelsContext);

  return (
    <>
      <MenuComponent />
      <div className="flex-desktop">
        <Header />
        <ShopComponent />
      </div>
      <InfoComponent title="ABOUT OUR FURNITURE" texto="Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. "/>

      <div className={`${menu ? 'overlay' : ""}`} />
    </>
  )
}

export default App
