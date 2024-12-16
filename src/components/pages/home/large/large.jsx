import large from './large.module.css'
import Image from 'next/image'
import g1 from '@/assets/images/g1.png'
import g2 from '@/assets/images/g2.png'
import g3 from '@/assets/images/g3.png'
import g4 from '@/assets/images/g4.png'
import g5 from '@/assets/images/g5.png'
import g6 from '@/assets/images/g6.png'
import g7 from '@/assets/images/g7.png'
import g8 from '@/assets/images/g8.png'
import g9 from '@/assets/images/g9.png'
import Button from '@/components/button/button'

export default function Large() {
    return(<>
    <section className={large.l}>
     <div className='m-auto text-center pb-[50px]'>
        <h6 className='text-[20px] font-[700] text-white mb-[25px]'>Our works</h6>
        <p className='text-white text-[16px] font-[400]'>Here our some of the best the result when <br /> we build some buildings, houses, and also <br /> interior designs</p>
     </div>
     <section className='max-w-7xl m-auto flex gap-[20px] h-[460px]'>
     <div className='grid grid-cols-1 gap-[20px] h-[100%]'>
     <Image src={g1} alt="" />
     <Image src={g2} alt="" />
     </div>
     <div className='h-[100%]'>
     <Image src={g3} alt="" />
     </div>
    <div className='h-[100%] grid grid-cols-1 gap-[20px]'>
       <Image src={g4} alt="" />
       <Image src={g5} alt="" />
    </div>
   <div className='h-[100%] grid grid-cols-1 gap-[20px]'>
   <div className='flex gap-[20px]'>
        <Image className='h-[100%] w-[50%]' src={g6} alt="" />
        <div className='grid grid-cols-1 gap-[20px]'>
        <Image src={g8} alt="" />
        <Image src={g9} alt="" />
        </div>
    </div>
    <Image src={g7} alt="" />
   </div>
     </section>
     <div className='flex gap-[30px] items-center m-auto py-[50px] max-w-7xl justify-end'>
     <svg width="715" height="2" viewBox="0 0 715 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1H714.5" stroke="url(#paint0_linear_22_892)" stroke-width="2"/>
<defs>
<linearGradient id="paint0_linear_22_892" x1="357.25" y1="1" x2="357.25" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#056088"/>
<stop offset="1" stop-color="#09A7CA"/>
</linearGradient>
</defs>
</svg>
   <Button title={'See more'}/>
     </div>
     <section className='max-w-7xl m-auto flex'>
        <div className='p-[20px] bg-white grid grid-cols-1 gap-[20px]'>
            <h6 className='text-[#056088] text-[24px] font-[700]'>What our clients say?</h6>
            <p className='text-[#434343] text-[16px] font-[400]'>See what our clients say <br /> about their new home</p>
            <Button title={'See more'} />
        </div>
        <div className={large.ff}>
            <div className='bg-[#023957] p-[20px]'>
                <p className='text-[17px] font-[100] font-[italic] text-white'>I really happy to see the result my new <br /> home. It’s really good house and good <br /> price too. And they work so fast becasue <br /> they have the best team. Once again, <br /> thankyou. I really appreciate it.</p>
               <p className='text-[18px] font-[600] text-white'>- Mr. Roberto</p>
            </div>
        </div>
     </section>
    </section>
    </>)
}