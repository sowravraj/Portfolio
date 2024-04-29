import HeroImg from "../asset/hero.png"
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin,AiOutlineInstagram} from "react-icons/ai";


const Hero = () => {

  const config = {
    bio : "I am a full stack developer",
    social : {
       Instagram : "https://www.instagram.com/sowravraj?igsh=MWxleHcxOTJldWFpag==",
       LinkedIn : "https://www.linkedin.com/in/sowravraj",
       X : "https://twitter.com/Sowravrajvr"
    }
  }
  
        return <section id="hero" className="flex flex-col md:flex-row px-5 py-32 bg-primary">



        <div className="md:w-1/2 flex flex-col px-10">

              <h1 className="text-white text-6xl font-hero-font ">Hi,<br/> Im <span className="text-black">Sowrav Raj</span>
              <p className="text-2xl">{config.bio}</p>
              </h1>

              <div className="flex py-5">
                <a href={config.social.X} className="pr-5 hover:text-white"><FaXTwitter size={40} /></a>
                <a href={config.social.Instagram} className="pr-5 hover:text-white"><AiOutlineInstagram size={40} /></a>
                <a href={config.social.LinkedIn} className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
              </div>
                
        </div>        

        <img src={HeroImg} className="md:w-1/3" alt="Hero"/>  
        
        </section>

}

export default Hero;