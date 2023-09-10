import Image from 'next/image';
import PinkButton from '../buttons/pink_button';

const HomeAboutMe = () => {
    return ( 
        <section className="flex flex-col items-center mt-32">
            <h2 className="font-cherryswash h1-base text-primary">I am a self-taught artist...</h2>
            <p className="font-darkergrotesque text-2xl py-5 text-center mt-[20px]">
                I developed my passion for art and design when I was still very young.<br/>Despite my work experience, 
                I dont limit myself on creating to just one type of art/design. I am also<br/>knowledgeable with digital 
                illustrations and have been taking some commissions.
            </p>
            <div className='flex flex-wrap justify-between max-w-[1200px]'>
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_1.png'} alt="about-me-1" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_2.png'} alt="about-me-2" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_3.png'} alt="about-me-3" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_4.png'} alt="about-me-4" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_5.png'} alt="about-me-5" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_6.png'} alt="about-me-6" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_7.png'} alt="about-me-7" />
                <Image height={250} width={250} className='mt-[52px]'
                src={'/images/home/about_me_8.png'} alt="about-me-8" />
            </div>
            <div className='mt-24'>
                <PinkButton title={'More'}/>
            </div>
        </section>
    );
}
 
export default HomeAboutMe;