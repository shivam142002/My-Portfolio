import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/shivamkumar142002/",
            style: "rounded-tr-md bg-blue-800"

        },

        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/shivam142002",
            style: "bg-neutral-900"
        },

        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:shivam142002@gmail.com",
            style: "bg-red-700"

        },

        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "https://drive.google.com/drive/u/0/folders/1jywiwkwLhIIf3N_-7YsxFuyxe6KruAL6",
            style: "rounded-br-md bg-cyan-400",

        }
    ]

    return (
        <>
            <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">

                <ul>

                    {links?.map(link =>

                        <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-9px] hover:rounded-md duration-300  ${link.style}`}>
                            <a
                                href={link.href}
                                className=" flex justify-between items-center w-full text-white"
                                target="_blank"
                                rel='noreferrer'
                            >
                                <>
                                    {link.child}
                                </>
                            </a>
                        </li>


                    )}


                </ul>

            </div>
        </>
    )
}

export default SocialLinks