import Image from "next/image"
import Button from "./Button"


const HireUs = () => {
  return (
    <div>
         <div className='bg-orange-50 rounded-md mx-auto my-20 max-w-[1200px] text-gray-20 py-3 flexEnd font-sans'>
      <div className=' flex flex-col lg:flex-row flexCenter gap-10 mx-5 lg:mx-10'>
        <h2 className="bold-25 lg:bold-30">Hire the world’s best developers
and designers around!</h2>
<Image 
src='/cta-shape-1.svg'
width={300}
height={200}
alt='arrow image'
className='hidden lg:block'
/>
<div className='relative'>
<Image 
src='/cta-btn-shape-1.svg'
width={100}
height={40}
alt='cta shape'
className='mb-1 mx-auto'
/>
      <Button
         type="button"
         title="Hire the best Developers"
         variant="btn_dark_green_outline"
         
        />
        <Image 
src='/cta-btn-shape-1.svg'
width={100}
height={40}
alt='cta shape'
className='mt-1 mx-auto rotate-180'
/>
</div>
      </div>
      </div>
    </div>
  )
}

export default HireUs