import {Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu,setToggleMenu]=useState(false)
return <header id='header' className="flex justify-between px-5 py-2 bg-header_bg">
    <a className="font-bold text-indigo-700" href="#">heloo everone</a>
    <webnav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
    </webnav>
    { toggleMenu &&
    <mobnav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white bg-mobnav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul> 
    </mobnav>
    }

    <botton onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon  className='text-white h-5'/></botton>

    </header>
}