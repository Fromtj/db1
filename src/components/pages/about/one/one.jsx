import about1 from '@/assets/images/about1.png'
import Image from 'next/image'

export default function One() {
    return(<>
    <section className='max-w-7xl m-auto flex justify-between py-[100px] items-center xs:block'>
        <div className='w-[45%] xs:w-[100%]'>
            <Image className='w-[100%]' src={about1} alt="" />
        </div>
        <div className='w-[45%] xs:w-[100%]'>
            <h5 className='text-[#056088] text-[24px] font-[700]'>Here were the story begins</h5>
            <p className='text-[#434343] text-[16px] font-[400] my-[30px]'>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
            <p className='text-[#434343] text-[16px] font-[400]'>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
        </div>
    </section>
    </>)
}