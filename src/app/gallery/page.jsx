import gall from '@/assets/images/gall.png'
import Card from '@/components/pages/gallery/card/card'

export default function Gallerypage() {
    return(<>
  <section className='max-w-7xl m-auto flex justify-between pt-[100px]'>
  <Card img={gall} titl={'Interior design'} decs={'3 Months work time'} />
    <Card img={gall} titl={'Interior design'} decs={'3 Months work time'} />
    <Card img={gall} titl={'Interior design'} decs={'3 Months work time'} />
  </section>
  <section className='max-w-7xl m-auto flex justify-between mt-[30px] pb-[100px]'>
  <Card img={gall} titl={'Interior design'} decs={'3 Months work time'} />
    <Card img={gall} titl={'Interior design'} decs={'3 Months work time'} />
    <Card img={gall} titl={'Interior design'} decs={'3 Months work time'} />
  </section>
    </>)
}