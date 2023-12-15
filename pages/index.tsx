import Hero from "@/components/hero";
import JobExperience from "@/components/job-exp";
import BannerPortfolio from "@/components/banner_portfolio";
import HomeAboutMe from "@/components/about_me";
import ContactMe from "@/components/contact-me";
import ImageCarousel from "@/components/image-carousel";


const Home = () => {

    const images = [
        '/images/home/about_me_1.png',
        '/images/home/about_me_2.png',
        '/images/home/about_me_3.png',
        '/images/home/about_me_4.png',
        '/images/home/about_me_5.png',
        '/images/home/about_me_6.png',
        '/images/home/about_me_7.png',
        '/images/home/about_me_8.png',
        '/images/home/about_me_1.png',
        '/images/home/about_me_2.png',
        '/images/home/about_me_3.png',
        '/images/home/about_me_4.png',
        '/images/home/about_me_5.png',
    ];

    return ( 
        <div className="bg-primary-100">
            <div className="bg-[url('/assets/bg-hero-section.png')] bg-no-repeat bg-right-top bg-cover pt-[155px]">
                <Hero />
            </div>
            <div className="max-w-[1440px] mx-auto px-5 pb-[101px]">
                <JobExperience />
                <div className="flex flex-col justify-center mb-40 text-center">
                    <h1 className="h3-md text-primary mb-10">Brands I&#39;ve worked on :</h1>
                    <ImageCarousel images={images} />
                </div>
                <BannerPortfolio />
                <HomeAboutMe />
            </div>
            <ContactMe />
        </div>
    );
}
 
export default Home;