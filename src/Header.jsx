import hamburger from "./assets/images/icon-hamburger.svg";
import logo from "./assets/images/logo.svg";
import arrowRight from "./assets/images/icon-angle-right.svg";
import arrowLeft from "./assets/images/icon-angle-left.svg";
import { useContext } from "react";
import { ModelsContext } from "./context/ModelsContext";


export const Header = () => {

    const { modelsMobile } = useContext(ModelsContext);

    const { currentIndex, setCurrentIndex } = useContext(ModelsContext);

    const { setFade } = useContext(ModelsContext);

    const { menu, setMenu } = useContext(ModelsContext);

    const handleNext = () => {
        setFade(true);

        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % modelsMobile.length);
            setFade(false);
        }, 300);
      };
    
      const handlePrev = () => {
        setFade(true);

        setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + modelsMobile.length) % modelsMobile.length);
        setFade(false);
        }, 300);
      };
    
      const currentModel = modelsMobile[currentIndex];

      const isTablet = window.innerWidth >= 768;
      
      
    return (
        <div className="headerContainer" style={{ backgroundImage: `url(${isTablet ? currentModel.imageDesktop : currentModel.imageMobile})` }}>
            <header className="header">
                <div className="header_icons">
                    <img src={hamburger} alt="hamburger" className="header_icons-hamburger" onClick={() => setMenu(!menu)}/> 
                    <img src={logo} alt="logo" className="header_icons-logo" />
                    <nav className="header_icons-nav">
                        <p className="text-preset-3-semibold">home</p>
                        <p className="text-preset-3-semibold">shop</p>
                        <p className="text-preset-3-semibold">about</p>
                        <p className="text-preset-3-semibold">contact</p>
                    </nav>
                </div>
            </header>

            <div className="header_arrows">
                <div className="header_arrows-left" onClick={handlePrev}>
                    <img src={arrowLeft} alt="arrow-left" />
                </div>

                <div className="header_arrows-right" onClick={handleNext}>
                    <img src={arrowRight} alt="arrow-right" />
                </div>
            </div>
        </div>
    )
}