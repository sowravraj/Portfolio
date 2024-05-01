import VoyageMingle from "../asset/voyage1.PNG"
import Ecommerce from "../asset/ecommerce-websites.jpg"

const Projects = () => {

    const config = {
        projects : [{
            image : VoyageMingle,
            description : "Voyage Mingle facilitates travel experiences by pairing individuals who share similar mindsets, interests, and ideas, fostering connections and adventures with like-minded strangers.",
            link : "https://github.com/sowravraj/Voyage_Mingle"
        }
        ]
    }

    return <section id="project" className="flex flex-col py-5 px-5 justify-center bg-primary py-100">

        <div className="w-full">
            <div className="flex flex-col px-5">
               <h1 className="text-4xl text-white border-b-4 mb-5  w-[138px] border-[#2b2d77] font-bold">Projects</h1>
               <p className="w-full mb-5">Here are some standout projects I've crafted utilizing the MERN stack and Tailwind CSS, showcasing my proficiency and creativity in web development.</p>
            </div>              
        </div>
        <div className="py-10">
            <div className="flex flex-col md:flex-row px-5 gap-4">
                {config.projects.map((project)=>(                
                <div className="relative">
                    <img src={project.image} className="h-[200px] " />
                    <div className="absolute left-0 right-0 bottom-0 top-0 py-5 bg-white opacity-0 duration-500 hover:opacity-100" >
                        <p className="text-center pb-2">{project.description}</p>
                        <div className="flex justify-center">
                            <a className="btn " target='_blank' href={project.link}>view project</a>
                        </div>
                </div>
                </div>
                ))}

                
               
            </div>
            
        </div>


    </section>
}

export default Projects