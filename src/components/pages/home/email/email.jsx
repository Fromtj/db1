import email from './email.module.css'
import Button from '@/components/button/button'

export default function Email() {
    return(<>
    <section className={email.ee}>
     <h1 className='text-[45px] text-white font-[700]'>Want to get our offer <br /> updates and news?</h1>
     <p className='text-[16px] text-white font-[200] my-[20px]'>Submit your e-mail and we will give you update about <br /> information and discount. Every single week. (not spamming)</p>
     <div className='w-[500px] bg-white m-auto flex justify-between items-center'>
      <p className='ml-[20px] text-[#00000066]'>Enter your e-mail here</p>
      <Button title={'Submit'} />
     </div>
    </section>
    </>)
}