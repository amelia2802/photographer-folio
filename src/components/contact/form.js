import {useState} from "react";
import { PiCameraThin } from "react-icons/pi";
import { MdOutlineDone } from "react-icons/md";
export default function Form(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [type,setType] = useState('');
    const [details,setDetails] = useState('');
    const [sentEmail,setSentEmail] = useState(false);

    function submit(e){

        e.preventDefault();
        
        if(name && email && type && details){
            setSentEmail(true)
        }
        else{
            alert("Kindly fill in all fields.")
        }
    }

    return(
        <div className="flex flex-col gap-5 p-10 md:w-1/2 max-[600px]:mt-10 shadow-2xl rounded-lg">
            <h5 className="flex items-center gap-3 text-2xl justify-center font-semibold text-[#D40003]"><PiCameraThin />Work With Barbara </h5>
            <form className={`flex flex-col gap-5 ${sentEmail? "hidden" : "block"}`} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        className="px-1 py-2 border rounded-lg"
                        id="name" 
                        type="text" 
                        placeholder="Jane Doe" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input 
                        className="px-1 py-2 border rounded-lg" 
                        id="email"
                        type="email" 
                        placeholder="example@email.com" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="type">Project Type </label>
                    <input 
                        className="px-1 py-2 border rounded-lg" 
                        id="type"
                        placeholder="Fashion shoot, Editorial, Campaign, etc." 
                        value={type}
                        onChange={e => setType(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="details">Project Details</label>
                    <textarea 
                        className="px-1 py-2 border rounded-lg" 
                        id="details"
                        rows={6} 
                        placeholder="Tell me about your vision, timeline, budget, and any specific requirements..." 
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />
                </div>
                <button className="bg-[#FF4649] text-[#F9ECE3] p-2 w-max m-auto rounded-lg hover:submit" onClick={submit}> Send Inquiry </button>
            </form>
            <div className={`flex-col gap-4 items-center ${sentEmail ? "flex" : "hidden"}`}>
                <p className="text-2xl text-[#D40003] flex items-center gap-2"><span className="bg-[#f03f4295] p-2 rounded-full"><MdOutlineDone /></span> Email Sent Sucessfully!</p>
                <p>Thanks {name} for trusting Barbara! Please wailt 3-4 business days to hear back from us.</p>
            </div>
        </div>
    )
}