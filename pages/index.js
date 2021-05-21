import React from 'react'
import Link from 'next/link'

const PaginaPrinc = () => {
    return (
    <div className='mx-auto container text-justify text-gray-800 p-8 -mt-8'>
        <p>Software Developer for more than 20 years, having a vast experience in ERP development, using different technologies. 
            Graduated in Information Systems, I'm able to fit both as software analyst and developer. 
            Also, I'm experienced in providing third level support.
        </p>
        <br/>
        <p className='font-bold'>Current Activities:</p>
        <div className='mt-5 mx-4'>
            <ul className='list-disc'>
                <li>Freelance Full-Stack developer, currently working with HTML5, CSS, React.JS, Node.JS</li>
                <li>CRM development using ASP.NET</li>
                <li>Microsoft SQL Server Maintenance</li>
                <li>ERP development using Delphi</li>
            </ul>
        </div>

        <div className='mx-auto mt-8 mb-8'>
        <p className='mb-4 font-bold'>Interests:</p>    
            <a><img src="/html5-64px.png" className='inline' title='HTML5'/></a>
            <a><img src="/css_64x.png"  className='inline' title='CSS'/></a>
            <a><img src="/js-icon-64px.png"  className='inline' title='JavaScript'/></a>
            <a><img src="/react-64px.png"  className='inline' title='React.JS'/></a>
            <a><img src="/next-64px.png"  className='inline mx-1' title='NEXT.js'/></a>
            <a><img src="/nodejs-64px.png"  className='inline' title='Node.js'/></a> 
            <a><img src="tailwind-64px.png"  className='inline' title='TailWind CSS'/></a>
            <a><img src="/dot_net_original_64px.png"  className='inline' title='.NET'/></a>
        
        </div>

    </div>
    )
}

export default PaginaPrinc