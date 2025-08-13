import Socials from "./socials"
import Form from "./form"
export default function Contact(){
    return(
        <section id="contact" className="flex flex-col items-center mt-20 gap-10 px-5">
            <h4 className="text-5xl text-center text-[#D40003]">Let's Create Together</h4>
            <p className="italic text-[#ec8268]">Ready to bring your vision to life? Let's discuss your project and create something extraordinary.</p>
            <div className="md:flex gap-10 mt-10 px-28">
                <Socials />
                <Form />
            </div>
        </section>
    )
}