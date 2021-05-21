import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='mx-auto bg-white border-gray-100 border-b-8 m-2 px-8 p-8 container text-center w-80'>
        <p className='mb-4 font-bold'>Social media:</p>    
        <Link href='https://www.github.com/igormpmartins' >
            <a>
                <img src="/GitHub-Mark-64px.png" className='inline'/>
            </a>
        </Link>
        <Link href='https://www.linkedin.com/in/igormpmartins'>
            <a>
                <img src="/Linkedin-icon.png"  className='inline'/>
            </a>
        </Link>
        <Link href='https://www.instagram.com/igormpmartins'>
            <a>
                <img src="/instagram-64px.png"  className='inline'/>
            </a>
        </Link>
        
    </div>
    )
}

export default Footer