import { createContext } from "react";
import { useState } from "react";

import heroMobile1 from '@/assets/images/mobile-image-hero-1.jpg';
import heroDesktop1 from '@/assets/images/desktop-image-hero-1.jpg';
import heroMobile2 from '@/assets/images/mobile-image-hero-2.jpg';
import heroDesktop2 from '@/assets/images/desktop-image-hero-2.jpg';
import heroMobile3 from '@/assets/images/mobile-image-hero-3.jpg';
import heroDesktop3 from '@/assets/images/desktop-image-hero-3.jpg';

// eslint-disable-next-line react-refresh/only-export-components
export const ModelsContext = createContext();

export const ModelsProvider = ({ children }) => {
    const modelsMobile = [
        {
          title: "Discover innovative ways to decorate",
          description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
          imageMobile: heroMobile1,
          imageDesktop: heroDesktop1
        },
        {
          title: "We are available all across the globe",
          description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
          imageMobile: heroMobile2,
          imageDesktop: heroDesktop2
        },
        {
          title: "Manufactured with the best materials",
          description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
          imageMobile: heroMobile3,
          imageDesktop: heroDesktop3
        },
      ];

      const [currentIndex, setCurrentIndex ] = useState(0);

      const [fade, setFade] = useState(false);

      const [menu, setMenu] = useState(false);

    return (
        <ModelsContext.Provider value={{ modelsMobile, currentIndex, setCurrentIndex, fade, setFade, menu, setMenu }}>
            {children}
        </ModelsContext.Provider>
    );
}