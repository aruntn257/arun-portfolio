import AboutImg from '../assets/about.png'

export default function About() {

    return <section id='about' className='flex flex-col md:flex-row bg-slate-600'>
        <div className='py-5 md:w-1/2'>
        <img src={AboutImg}></img>
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-2xl'>
            <h1 className='font-bold border-b-2 mb-5'>About me</h1>
            <p className='mb-3'>
                I am new fullstack devloper
                <br/> Worked on Python adn ReactJS
            </p>
            </div>
        </div>
    </section>

}

{/*  */}