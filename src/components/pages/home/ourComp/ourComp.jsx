import Button from "@/components/button/button"
import pro from '@/assets/images/pro.png'
import Image from "next/image"

export default function OurComp() {
    return(<>
    <section className="max-w-7xl m-auto flex items-center py-[100px] px-[15px] justify-between xs:block">
        <div className="w-[45%] xs:w-[100%] xs:mb-[30px]">
            <Image src={pro} alt="" />
        </div>
        <div className="w-[45%] xs:w-[100%] text-center">
            <h5 className="text-[24px] font-[700] text-[#056088]">Our company</h5>
            <p className="text-[#434343] text-[16px] font-[400] py-[15px]">Debuilds is a team of architects, interior design, and <br /> contractors who help our clients not only to build <br /> their dream building, but also to feel comfortable <br /> after the building is used.</p>
            <span className="text-[16px] text-[#434343] font-[500]">We already handled</span>
            <div className="flex justify-between my-[20px]">
                <h6 className="text-[22px] font-[700] text-[#056088] xs:text-[18px]">50+ Clients</h6>
                <h6 className="text-[22px] font-[700] text-[#056088] xs:text-[18px]">30+ House</h6>
                <h6 className="text-[22px] font-[700] text-[#056088] xs:text-[18px]">20+ Building</h6>
            </div>
            <Button title={'See more'}/>
        </div>
    </section>
    <section className="text-center pb-[70px]">
        <h4 className="text-[24px] font-[700] text-[#056088]">Our services</h4>
        <p className="text-[#434343] text-[16px] font-[400]">Our services include building new buildings <br /> and renovating old buildings</p>
    </section>
    </>)
}