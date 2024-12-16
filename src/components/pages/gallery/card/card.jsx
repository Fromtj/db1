import Image from "next/image"
import Button from "@/components/button/button"

export default function Card({img,titl,decs}) {
    return(<>
    <div style={{boxShadow: '0px 0px 10px gray'}} className="w-[380px] pb-[20px]">
        <Image className="w-[100%]" src={img} />
      <div className="ml-[15px] mt-[15px]">
      <h5 className="text-[24px] text-[#056088] font-[700]">{titl}</h5>
        <p className="text-[18px] text-gray-500 font-[300] my-[15px]">{decs}</p>
 <Button title={'See process'} />
      </div>
    </div>
    </>)
}