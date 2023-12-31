import { FEATURES } from '@/constants'
import Image from 'next/image'

const Services = () => {
  return (
    <section id='services' className="flex-col flexCenter overflow-hidden   py-5 font-sans">
      <div className="max-container padding-container relative w-full flex justify-center">

        <div className="z-20 flex w-full flex-col lg:w-[95%]">
          <div className='relative'>
           
            <h2 className="bold-40 lg:bold-60 mt-2 text-gray-50">Our <span className='text-green-50'>Services</span></h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-2 lg:p-7 bg-green-90">
        <Image src={icon} alt={icon} width={30} height={30} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize text-green-50">
        {title}
      </h2>
      <p className="regular-18 mt-5 text-gray-50 lg:mt-[30px] text-left">
        {description}
      </p>
    </li>
  )
}

export default Services