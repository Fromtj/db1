import Image from "next/image"
import cont from '@/assets/images/cont.png'
import Button from "@/components/button/button"

export default function Ccc() {
    return(<>
    <section className="max-w-7xl m-auto flex bg-[#F5F5F5] my-[100px]">
        <div className="w-[45%]">
            <Image src={cont} alt="" />
        </div>
        <div className="p-[20px] w-[50%]">
            <h5 className="text-[#056088] font-[600] mb-[20px]">Let’s talk about anything you need</h5>
            <div className="flex gap-[15px] w-[100%]">
                <span className="bg-white text-[#c2c2c2] py-[15px] pl-[15px] w-[50%]">Your name/company name</span>
                <span className="bg-white text-[#c2c2c2] py-[15px] pl-[15px] w-[50%]">Phone/E-mail</span>
            </div>
            <span className="bg-white text-[#c2c2c2] pt-[15px] pl-[15px] w-[100%] pb-[170px] block my-[15px]">Message</span>
            <Button title={'Submit'} />
        </div>
    </section>
    <section className="m-auto text-center mb-[100px]">
    <h5 className="text-[#056088] font-[600] mb-[20px]">Or contact us via e-mails or even mobile call or Whatsapp messages</h5>
    <div className="flex gap-[20px] justify-center">
    <Button title={'E-mails'} />
    <Button title={'Whatsapp'} />
    <Button title={'Message'} />
    </div>
    </section>
    </>)
}