import React from 'react'

const Header = () => {
    return (
    <div className='mx-auto bg-gray-100 p-8 w-1/2 font-mono text-4xl'>
        <p className='text-left text-gray-700'>Igor Martins,</p>
        <p className='text-left font-bold'>Developer</p> <br/>
        <a>
            <img src="/caret_right_icon_64px.png" className='inline -mx-4 mr-5'/>
            <p className='text-left text-gray-700 inline'>based in Brazil</p>
        </a>

    </div>
    )
}

export default Header