import Card from "@/components/pages/gallery/card/card"
import news from '@/assets/images/new.png'
import Nnn from "@/components/nnn/nnn"

export default function Newspage() {
    return(<>
    <Nnn />
<section className="max-w-7xl m-auto flex justify-between my-[100px]">
<Card img={news} titl={'Tips of the week'} decs={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'} />
<Card img={news} titl={'Tips of the week'} decs={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'} />
<Card img={news} titl={'Tips of the week'} decs={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'} />
</section>

    </>)
}