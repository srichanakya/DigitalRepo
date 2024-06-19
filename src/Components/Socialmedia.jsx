import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs';
import {HiMail} from 'react-icons/hi'
import {BsFillPersonVcardFill} from 'react-icons/bs'

export default function Socialmedia() {

    const socialmediaurls = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <BsLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/sri-chanakya-yennana/',
            style:'rounded-tr-md'

        },
        {
            id:2,
            child: (
                <>
                    GitHub <BsGithub size={30}/>
                </>
            ),
            href:'https://github.com/srichanakya'

        },
        {
            id:3,
            child: (
                <>
                    Mail <HiMail size={30}/>
                </>
            ),
            href:'mailto:srichanakyayennana@gmail.com'

        },
        {
            id:4,
            child: (
                <>
                    Resume <BsFillPersonVcardFill size={30}/>
                </>
            ),
            href:'/Sri_Chanakya_Yennana_resume.pdf',
            style:'rounded-br-md',
            download:true

        }
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        
        {socialmediaurls.map(({id,child,href,style,download}) =>(
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + '  '+style}>
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                {child}
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}
