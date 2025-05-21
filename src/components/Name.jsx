import { SocialMedia } from "./socialMedia"
import adp from '../assets/adp1.png'


export const Name = () => { 
    return <div className="px-2 md:px-5 lg:px-8   ml-5 md:ml-8 lg:ml-10   pb-2 md:pb-3 lg:pb-5 text-2xl font-mono text-white ">
        <img src={adp} alt="ADP" className="w-10 md:w-16 lg:w-20  h-10 md:h-16 lg:h-20  ml-2 hover:cursor-pointer" onClick={() => window.location.reload("http://localhost:5173")} />
        <div className="">
            <SocialMedia />
        </div>
    </div>
}