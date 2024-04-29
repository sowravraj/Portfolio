import AboutImg from "../asset/about.png"

const About = () => {
    
    return <section className="flex flex-col md:flex-row bg-secondary px-5 py-5" id="about">
        
        <div className="py-5 md:w-1/2 ">
            <img src={AboutImg} />
        </div>
        <div className="flex md:w-1/2 justify-center ">
            <div className="flex flex-col justify-center">
               <h1 className="text-4xl text-white border-b-4 mb-5 w-[168px] border-primary font-bold">About me</h1>
               <div className="text-white">
                    <p className=" pb-5"><span className="font-bold text-2xl">Background:</span>  Sowrav Raj, experienced at TCS and as a freelance developer.</p>
                    <p className=" pb-5"><span className="font-bold text-2xl">Expertise:</span>   Full Stack Development, specializing in MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                    <p className=" pb-5"><span className="font-bold text-2xl">Experience:</span> </p>
                    <p className=" pb-1"><span className="font-bold">TCS:</span> Diverse project exposure, learned software development lifecycle and teamwork.</p>
                    <p className=" pb-5"><span className="font-bold">Freelance:</span> Explored new tech, stayed updated, and adapted continuously.</p>
                    <p className=" pb-5"><span className="font-bold text-2xl">Passion:</span> Driven by crafting clean, scalable code.</p>
                    <p className=" pb-5"><span className="font-bold text-2xl">Goal:</span> Excited to venture into founding Voyage Mingle, a company centered around shared travel experiences where strangers connect through shared thoughts, ideas, and interests.</p>   
               </div>    
            </div>
        </div>

    </section>
    

}


export default About