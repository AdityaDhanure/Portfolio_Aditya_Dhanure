import { SocialMedia } from "./socialMedia"
import adp from '../assets/adp1.png'


export const Name = () => { 
    return <div className="px-8 ml-10 pb-5 text-2xl font-mono text-white ">
        <img src={adp} alt="ADP" className="w-20 h-15 ml-2 hover:cursor-pointer" onClick={() => window.location.reload("http://localhost:5173")} />
        <div className="">
            <SocialMedia />
        </div>
    </div>
}