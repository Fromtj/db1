import Image from "next/image"
import fdf from '@/assets/images/fdf.png'

export default function Two() {
    return(<>
    <section className="bg-[#056088E5] max-w-7xl m-auto flex justify-between py-[100px] items-center xs:block px-[50px] xs:px-[15px]">
        <div>
            <h2 className='text-white text-[24px] font-[700]'>We love to make perfect   home</h2>
            <p className='text-white text-[16px] font-[400] my-[30px]'>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
        </div>
        <div className='w-[45%] xs:w-[100%]'>
            <Image className='w-[100%]' src={fdf} alt="" />
        </div>
    </section>
    </>)
}