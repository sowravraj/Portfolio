

const Contact = () => {
    const config = {
        email : "mailto:sowravraj@gmail.com?subject=Hey, Sowrav! Let's collaborate and create some magic together",
        phone : "tel:+91-8825721526"
    }
        return <section id="contact" className="flex flex-col bg-primary px-5 py-5" >
        
        <div className="flex flex-col px-6 px-5 py-32 items-center  text-white">
            
               <h1 className="text-4xl border-b-4 mb-5 w-[138px] border-secondary font-bold">Contact</h1>
              
               <p className=" pb-5">Please reach out to me here if you'd like to continue the discussion further.</p>

               <p><span className="py-2 font-bold">Email : </span> <a href={config.email}>sowravraj@gmail</a></p> 

               <p><span className="py-2 font-bold">Phone : </span> <a href={config.phone}>+91-8825721526</a></p>                       
            
        </div>

    </section>
}

export default Contact