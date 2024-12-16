'use client'
import Link from "next/link"
import header from './header.module.css'
import { usePathname } from "next/navigation"

export default function Header() {
    let params = usePathname()
    return(<>
    <header className={header.header} >
       <div className="max-w-7xl m-auto flex justify-between items-center py-[30px] px-[15px]">
         <div>
            <p className="text-[40px] text-white font-[600]">DB-</p>
        </div>
        <div className="flex gap-[18px] xs:hidden">
            <Link style={{color: params == '/' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/'}>Home</Link>
            <Link style={{color: params == '/about' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/about'}>About</Link>
            <Link style={{color: params == '/contact' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'contact'}>Contact</Link>
            <Link style={{color: params == '/gallery' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/gallery'}>Gallery</Link>
            <Link style={{color: params == '/news' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/news'}>News</Link>
            <Link style={{color: params == '/processDetails' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/processDetails'}>Process Details</Link>
            <Link style={{color: params == '/career' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/career'}>Career</Link>
            <Link style={{color: params == '/ourStory' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/ourStory'}>Our story</Link>
            <Link style={{color: params == '/services' ? '#056088' : 'white'}} className="text-white text-[17px] font-[400] hover:text-[#056088]" href={'/services'}>Services</Link>
        </div>
<div className="hidden xs:block">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="7" x2="21" y2="7" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="17" x2="21" y2="17" />
</svg>

</div>
        </div>
        <h1 className="text-center text-white font-[600] text-[45px] pt-[20px] pb-[50px]">We build your dream house <br/> well and professionally</h1>
    </header>
    </>)
}