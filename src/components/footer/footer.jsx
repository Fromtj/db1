import Button from "../button/button"

export default function Footer() {
    return(<>
    <section>
     <section className="w-[100%] bg-[#023957] py-[100px] xs:py-[50px] px-[15px]">
     <div className="max-w-6xl m-auto flex justify-between flex-wrap xs:gap-[50px]">
            <div>
            <p className="text-[40px] text-white font-[600]">DB-</p>
            <p className="text-[12px] text-white my-[20px]">Lizenzo street number 12 <br />Jakarta, Indonesia</p>
            <Button title={'Get directions'}/>
            </div>
            <div className="grid grid-cols-1 gap-[20px]">
                <p className="text-white text-[24px] font-[600]">Menu</p>
                <span className="text-white text-[16px] font-[400]">Home</span>
                <span className="text-white text-[16px] font-[400]">About</span>
                <span className="text-white text-[16px] font-[400]">Gallery</span>
                <span className="text-white text-[16px] font-[400]">Service</span>
            </div>
            <div className="grid grid-cols-1 gap-[20px]">
                <p className="text-white text-[24px] font-[600]">Contact</p>
                <span className="text-white text-[16px] font-[400]">E-mail</span>
                <span className="text-white text-[16px] font-[400]">Mobile</span>
                <span className="text-white text-[16px] font-[400]">Whatsapp</span>
                <span className="text-white text-[16px] font-[400]">Fax</span>
            </div>
            <div className="grid grid-cols-1 gap-[20px]">
                <p className="text-white text-[24px] font-[600]">Career</p>
                <span className="text-white text-[16px] font-[400]">Job</span>
                <span className="text-white text-[16px] font-[400]">Part-time</span>
                <span className="text-white text-[16px] font-[400]">Internship</span>
                <span className="text-white text-[16px] font-[400]">Service</span>
            </div>
            <div className="grid grid-cols-1 gap-[20px] xs:m-auto">
                <p className="text-white text-[24px] font-[600]">Business</p>
                <span className="text-white text-[16px] font-[400]">Affiliate</span>
                <span className="text-white text-[16px] font-[400]">Collaboration</span>
                <span className="text-white text-[16px] font-[400]">Investment</span>
                <span className="text-white text-[16px] font-[400]">People</span>
            </div>
        </div>
     </section>
        <div className="w-[100%] text-center">
            <p className="text-[#434343] text-[16px] font-[400] text-center py-[22px]">2021 - Copyright ZHB Studio</p>
        </div>
    </section>
    </>)
}