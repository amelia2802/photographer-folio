import { PiCameraThin } from "react-icons/pi";
export default function Form(){
    return(
        <div className="flex flex-col gap-5 p-10 w-1/2 shadow-2xl rounded-lg">
            <h5 className="flex items-center gap-3 text-2xl text-[#D40003]"><PiCameraThin />Work with Barbara </h5>
            <form className="flex flex-col gap-5" >
                <div className="flex flex-col gap-2">
                    <label>Full Name</label>
                    <input className="px-1 py-2 border rounded-lg" type="text" placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input className="px-1 py-2 border rounded-lg" type="email" placeholder="example@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Project Type </label>
                    <input className="px-1 py-2 border rounded-lg" placeholder="Fashion shoot, Editorial, Campaign, etc." />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Project Details</label>
                    <textarea className="px-1 py-2 border rounded-lg" rows={6} placeholder="Tell me about your vision, timeline, budget, and any specific requirements..." />
                </div>
                <button className="bg-[#FF4649] text-[#F9ECE3] p-2 w-max m-auto rounded-lg"> Send Inquiry </button>
            </form>
        </div>
    )
}