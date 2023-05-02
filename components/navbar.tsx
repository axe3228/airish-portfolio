import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavLinks = (item: any) => (
    <div className="mx-[45px]">
        <Link href={item.href} passHref>
            <button className="text-neutral-50 font-medium">{item.title}</button>
        </Link>
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
    
    window.addEventListener('scroll', changeNavbarBackground);

    return ( 
        <div className={`w-full fixed ${navBackgroundVisible ? "bg-[url('/assets/bg-hero-section.png')] bg-no-repeat bg-right-top bg-cover" : ""}`}>
            <div className="flex justify-between py-[15px] px-5 max-w-[1440px] mx-auto">
                <div><Image src="/assets/LOGO.png" width={100} height={75} alt={`site logo`}/></div>
                <div className="flex items-center">
                    <NavLinks title={`HOME`} href={`/`}/>
                    <NavLinks title={`ABOUT`} href={`/about`}/>
                    <NavLinks title={`PORTFOLIO`} href={`/`}/>
                    <NavLinks title={`CONTACT`} href={`/`}/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;