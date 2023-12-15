
import { useState } from "react";
import Image from "next/image";

const NavLinks = (item: any) => (
    <div className="mx-[45px]">
        <a href={item.href}>
            <button className="text-neutral-50 font-medium">{item.title}</button>
        </a>
    </div>
);

const Navbar = () => {
    const [navBackgroundVisible, setnavBackgroundVisible] = useState(false);

    const changeNavbarBackground = () => {
        if (window.scrollY === 0) {
            setnavBackgroundVisible(false)
        } else {
            setnavBackgroundVisible(true)
        }
    }
    
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeNavbarBackground);
     }
    

    return ( 
        <div className={`w-full fixed z-10 ${navBackgroundVisible ? "bg-[url('/assets/bg-hero-section.png')] bg-no-repeat bg-right-top bg-cover" : ""}`}>
            <div className="flex justify-between py-[15px] px-5 max-w-[1440px] mx-auto">
                <div><Image src="/assets/LOGO.png" width={100} height={75} alt={`site logo`}/></div>
                <div className="flex items-center">
                    <NavLinks title={`HOME`} href={`#home`}/>
                    <NavLinks title={`ABOUT`} href={`#about`}/>
                    <NavLinks title={`PORTFOLIO`} href={`#portfolio`}/>
                    <NavLinks title={`CONTACT`} href={`#contact`}/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;