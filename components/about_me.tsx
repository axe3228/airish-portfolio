import Image from 'next/image';
import PinkButton from './buttons/pink_button';

const HomeAboutMe = () => {

    const imageFlipper = (img1: string, img2: string) => (
        <div className="flip-container"> 
            <div className="flipper">
                <div className="front">
                    <Image height={250} width={250} src={img1} alt="" />
                </div>
                <div className="back">
                    <Image height={250} width={250} src={img2} alt="" />
                </div>
            </div>
        </div>
    );

    return ( 
        <section className="flex flex-col items-center mt-32">
            <h2 className="font-cherryswash h1-base text-primary">I am a self-taught artist...</h2>
            <p className="font-darkergrotesque text-2xl py-5 text-center mt-[20px]">
                I developed my passion for art and design when I was still very young.<br/>Despite my work experience, 
                I dont limit myself on creating to just one type of art/design. I am also<br/>knowledgeable with digital 
                illustrations and have been taking some commissions.
            </p>
            <div className='max-w-[1200px] space-y-10 mt-10 mb-10'>
                <div className='flex justify-between space-x-10'>
                    {imageFlipper('/images/home/about_me_1.png', '/images/home/about_me_2.png')}
                    {imageFlipper('/images/home/about_me_3.png', '/images/home/about_me_4.png')}
                    {imageFlipper('/images/home/about_me_5.png', '/images/home/about_me_6.png')}
                    {imageFlipper('/images/home/about_me_7.png', '/images/home/about_me_8.png')}
                </div>
                <div className='flex justify-between space-x-10'>
                    {imageFlipper('/images/home/about_me_9.png', '/images/home/about_me_10.png')}
                    {imageFlipper('/images/home/about_me_11.png', '/images/home/about_me_12.png')}
                    {imageFlipper('/images/home/about_me_13.png', '/images/home/about_me_14.png')}
                    {imageFlipper('/images/home/about_me_15.png', '/images/home/about_me_16.png')}
                </div>
            </div>
        </section>
    );
}
 
export default HomeAboutMe;