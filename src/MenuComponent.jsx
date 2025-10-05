import { useContext } from "react";
import {ModelsContext} from "./context/ModelsContext";
import close from "./assets/images/icon-close.svg";

export const MenuComponent = () => {
    const { menu, setMenu } = useContext(ModelsContext);

    return (
        <article className={`menu ${menu ? '' : "hidden"}`}>
            <img src={close} alt="icon-close" className="menu_close" onClick={() => setMenu(!menu)}/>
            <nav className="menu_nav">
                <p className="menu_nav-item text-preset-3-semibold">home</p>
                <p className="menu_nav-item text-preset-3-semibold">shop</p>
                <p className="menu_nav-item text-preset-3-semibold">about</p>
                <p className="menu_nav-item text-preset-3-semibold">contact</p>
            </nav>
        </article>
    )
}