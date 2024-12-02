import { SocialMedia } from './socialMedia';

export const Footer = () => {
    return <div>
        <footer className="text-white">
            <div className="w-full h-full flex bg-grey">

                <div className="w-1/2 px-16 py-16">
                    <div>
                        <p className='text-5xl font-bold hover:cursor-pointer' onClick={() => window.location.href = "http://localhost:5173"}>Aditya.D</p>
                    </div>
                    <div className='py-8'>
                        <SocialMedia />
                    </div>
                    <div className='mt-16 text-greyText'>
                        <p>© Copyright 2024 • adityadhanure portfolio. All Rights Reserved.</p>
                        <p className='text-palette'>Created by Aditya Dhanure</p>
                    </div>
                </div>

                <div className="w-1/2 flex py-20">
                    <div className='w-1/2 flex justify-center '>
                        <ul>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToHome()}}>Home</li>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToExper()}}>Experience</li>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToPros()}}>Projects</li>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToSkills()}}>Skills</li>
                        </ul>
                    </div>
                    <div className='w-1/2 flex justify-center '>
                        <ul>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToSkills()}}>Resources</li>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToPhilo()}}>Philosophy</li>
                            <li className='py-4 hover:text-palette hover:cursor-pointer' onClick={() => {ScrollToContact()}}>Contact</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    </div>
}



function ScrollToHome() {
    const section = document.getElementById('home');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToExper() {
    const section = document.getElementById('experience');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToPhilo() {
    const section = document.getElementById('philosophy');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToSkills() {
    const section = document.getElementById('skills');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToPros() {
    const section = document.getElementById('projects');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToContact() {
    const section = document.getElementById('contact');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
