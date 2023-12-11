import Image from 'next/image';
import PinkButton from './buttons/pink_button';

const BannerPortfolio = () => {
    return ( 
        <section className="flex flex-col items-center">
            <h1 className="h3-md text-primary mb-10">Banner Portfolio</h1>
            <div className='flex flex-wrap justify-between max-w-[1260px]'>
                <Image height={558} width={428} className='mb-9'
                src={'/images/home/banner-1.png'} alt="banner-1" />
                <Image height={558} width={397} className='mb-9'
                src={'/images/home/banner-2.png'} alt="banner-2" />
                <Image height={558} width={378} className='mb-9'
                src={'/images/home/banner-3.png'} alt="banner-3" />
                <Image height={311} width={311} className='mb-9'
                src={'/images/home/banner-4.png'} alt="banner-3" />
                <Image height={307} width={920} className='mb-9'
                src={'/images/home/banner-5.png'} alt="banner-3" />
            </div>
            <div className='mt-[42px]'>
                <PinkButton title={'More'}/>
            </div>
        </section>
    );
}
 
export default BannerPortfolio;