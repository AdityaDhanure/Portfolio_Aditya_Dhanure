

export const NavBar = () => {
    return <div>
        <nav className="flex bg-inherit">
            <ul className="flex justify-end w-full mr-16 font-semibold text-zinc-400">
                <li className="py-8 px-7 hover:cursor-pointer text-palette bg-gray-800">Home</li>
                <li className="py-8 px-7 hover:cursor-pointer hover:text-palette" onClick={() => {ScrollToExper()}}>Experience</li>
                <li className="py-8 px-7 hover:cursor-pointer hover:text-palette" onClick={() => {ScrollToSkill()}}>Skills</li>
                <li className="py-8 px-7 hover:cursor-pointer hover:text-palette" onClick={() => {ScrollToPros()}}>Projects</li>
                <li className="py-8 px-7 flex gap-1 hover:cursor-pointer  hover:text-palette" onClick={()=>{window.open("https://drive.google.com/file/d/1tkVk5w8ueL5rjhjiE2ysaX_GvutYCPrv/view?usp=sharing", "_blank")}}>
                    <p>Resume</p>
                    <div>
                        <svg id="icon" class="w-6 h-6  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                        </svg>
                    </div>
                </li>
                <li className="py-8 px-7 hover:cursor-pointer hover:bg-indigo-900 text-white bg-indigo-700" onClick={() => {ScrollToContact()}}>Contact</li>
            </ul>
        </nav>
    </div>
}


function ScrollToExper() {
    const section = document.getElementById('experience');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToSkill() {
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
