import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const menu = [
    {
        label: "Home",
        mLink: "/"
    },
    {
        label: "About us",
        mLink: "/"
    },
    {
        label: "Services",
        mLink: "/"
    },
    {
        label: "Projects",
        mLink: "/"
    },
    {
        label: "Blogs",
        mLink: "/"
    },
]

function Header() {
    const pathName = useLocation().pathname

    return (
        <>
            <div className='max-w-[1392px] mx-auto top-[25px] left-[50%] translate-x-[-50%] fixed w-full z-[100] flex items-center justify-between bg-[#FFFFFF] rounded-full py-[10px] pl-[40px] pr-[24px]'>
                <Link>
                    <img src="/assets/nav/logo.png" className='h-[54px] w-[54px] object-cover' alt="" />
                </Link>
                <ul className='flex items-center gap-[50px]'>
                    {menu?.map((e, i) => {
                        return (
                            <Link key={i} to={e?.mLink} className='font-[400] font-inter text-[18px] leading-[20px] text-[#021E05]'>
                                {e?.label}
                            </Link>
                        )
                    })}
                </ul>
                <button className='bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-transparent hover:text-[#6F7849] rounded-full py-[18px] px-[35px] font-[400] font-bricolage text-[18px] leading-[21px] text-[#FFFFFF]'>Let's Talk</button>
            </div>
        </>
    )
}

export default Header