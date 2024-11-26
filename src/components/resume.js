import ResumeImg from '../assets/resume.jpg'

export default function Resume() {

    return <section id='resume' className='flex flex-col md:flex-row bg-hero'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            < img className='w-[300px]' src= {ResumeImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-2xl'>
            <h1 className='font-bold border-b-2 mb-5'>Resume</h1>
            <p className='mb-3'>
                view my resume <a className='dw-btn hover: border-white' href="#">Download</a>
            </p>
            </div>
        </div>
    </section>

}