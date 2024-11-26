import heroImg from '../assets/hero.png'
import { AiOutlineLinkedin } from "react-icons/ai";


export default function Hero() {

return <hero id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-hero text-white text-8xl justify-center'>
    <div className='w-1/2 flex flex-col' >
        <h1>Hello, <br/>I'm <span className='text-neutral-400'>Arun</span>
        <p className='text-2xl'>I am a Fullstack developer</p>
        </h1>
        <div className='py-5 flex icon'>
        <a href='#' className='py-5 hover:text-sky-500'> <AiOutlineLinkedin size={40} /> </a>
        </div>
    </div>
    <img className='md:w-1/3' src={heroImg}/>
</hero>


}