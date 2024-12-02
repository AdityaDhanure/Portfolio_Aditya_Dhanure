import insta from '../assets/instagram.png';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';

export const SocialMedia = () => {
    return <div>
        <div className='flex gap-3'>
            <div className='w-6 h-6 hover:cursor-pointer' onClick={()=>{window.open('https://www.instagram.com/adityadhanure0607/', '_blank')}}>
                <img src={insta} alt={"Instagram"} />
            </div>
            <div className='w-6 h-6 hover:cursor-pointer' onClick={()=>{window.open('https://www.linkedin.com/in/aditya-dhanure-ba610926b/', '_blank')}}>
                <img src={linkedin} alt={"Linkedin"} />
            </div>
            <div className='w-6 h-6 hover:cursor-pointer' onClick={()=>{window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbtwjVwPtpvQhJnNrKbVqfCNdttMcgBQvRTrJLHWMDKWHzhlCwzSsZSJBtGrMwCwhPnmxF', '_blank')}}>
                <img src={gmail} alt={"Gmail"} />
            </div>
        </div>
    </div>
}