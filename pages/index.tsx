import Hero from "@/components/hero";
import JobExperience from "@/components/job-exp";
import BannerPortfolio from "@/components/banner_portfolio";
import HomeAboutMe from "@/components/about_me";


const Home = () => {
    return ( 
        <div className="bg-primary-100 pb-[101px]">
            <div className="bg-[url('/assets/bg-hero-section.png')] bg-no-repeat bg-right-top bg-cover pt-[155px]">
                <Hero />
            </div>
            <div className="max-w-[1440px] mx-auto px-5">
                <JobExperience />
                <BannerPortfolio />
                <HomeAboutMe />
            </div>
        </div>
    );
}
 
export default Home;