import arrow from "./assets/images/icon-arrow.svg";
import { useContext } from "react";
import { ModelsContext } from "./context/ModelsContext";

export const ShopComponent = () => {

    const { modelsMobile } = useContext(ModelsContext);
    const { currentIndex } = useContext(ModelsContext);

    const currentModel = modelsMobile[currentIndex];
    
    const { fade } = useContext(ModelsContext);


    return (
        <article className="info">
            <div className={`textWrapper ${fade ? "fade-out" : "fade-in"}`}>
                <h2 className="info_title text-preset-2">{currentModel.title}</h2>
                <p className="info_text text-preset-3-medium">{currentModel.description}</p>
            </div>

            <div className="info_shop">
                <p className="info_shop-text text-preset-4">SHOP NOW</p>
                <img src={arrow} alt="arrow-shop" className="info_shop-arrow" />
            </div>
        </article>
    )
}