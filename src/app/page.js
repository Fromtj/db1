import OurComp from "@/components/pages/home/ourComp/ourComp"
import Info from "@/components/pages/home/info/info"
import Bonofit from "@/components/pages/home/bonofit/bonofit"
import Info2 from "@/components/pages/home/info2/info2"
import Large from "@/components/pages/home/large/large"
import logo from '@/assets/images/logo.png'
import Image from "next/image"
import Track from "@/components/pages/home/track/track"
import Email from "@/components/pages/home/email/email"

export default function Home() {
return(<>
  <OurComp/>
  <Info/>
  <Bonofit/>
  <Info2/>
  <Large/>
  <Image className="max-w-7xl px-[15px] m-auto my-[100px]" src={logo} alt="" />
  <Track/>
  <Email/>
</>)
}