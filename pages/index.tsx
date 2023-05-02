import Hero from "@/components/home/hero";
import JobExperience from "@/components/home/job-exp";


const Home = () => {
    return ( 
        <div className="bg-primary-100">
            <Hero />
            <JobExperience />
        </div>
    );
}
 
export default Home;