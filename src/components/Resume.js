import ResumeImg from "../asset/resume.jpg"

const Resume = () => {
    const config = {
        link : "https://drive.google.com/file/d/1sY8G4NPV8RkpqnypCGB8xCxGv0Ee20zy/view?usp=drive_link"
    }
        return <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 py-5">
        
        <div className="py-5 px-100 md:w-1/2 flex justify-center ">
            <img src={ResumeImg} className="w-[380px] h-[290px]" />
        </div>
        <div className="flex md:w-1/2 px-6 justify-center ">
            <div className="flex flex-col justify-center">
               <h1 className="text-4xl text-white border-b-4 mb-5 w-[138px] border-primary font-bold">Resume</h1>
               <div className="text-white">
                    <p className=" pb-5">Feel free to take a look at my resume.  <a href={config.link} className="btn">Download</a></p>
                       
               </div>    
            </div>
        </div>

    </section>
}

export default Resume