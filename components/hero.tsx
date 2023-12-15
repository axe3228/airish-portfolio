import Image from "next/image";

const Hero = () => {
    return ( 
        <section className="max-w-[1440px] mx-auto px-5 flex justify-between">
            <div>
                <Image src="/assets/img-hero-section.png" width={802} height={761} alt={`Hero Section Image`}/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-cherryswash text-[90px] text-primary leading-[112px]">Hello<span className="font-metamorphous">!</span></h1>
                <p className="text-primary font-darkergrotesque text-[64px] leading-[.9]">I am Airish Jane Absin</p>
                <p className="font-darkergrotesque text-[30px] rounded-[20px] py-4 px-6 text-neutral-50">Graphic Designer</p>
                <div className="mt-[90px]">
                    <button className="w-[210px] font-darkergrotesque-500 text-primary-50 border-2 
                        border-primary text-[20px] pb-[15px] pt-[10px] rounded-tl-[20px] rounded-br-[20px] bg-primary">GET CV</button>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;