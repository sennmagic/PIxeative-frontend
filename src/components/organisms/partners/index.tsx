import React from 'react'

import Heading from '@/components/atoms/headings'


const Partners = () => {

  const partners = [
    { id: 1, name: 'Partner 1', logo: '/Google.png' },
 { id: 2, name: 'Partner 1', logo: '/Google.png' },
  { id: 3, name: 'Partner 1', logo: '/Google.png' },
  ]
  return (
    <section>

<Heading text='Trusted by Brands Who Believe in Design' size='small' className='text-center font-[var(--font-pp-mori)]'/>



<div className="flex  items-center justify-center gap-8 flex-wrap  ">

{partners.map((partner) => (
  <div key={partner.id} className="">
    <img src={partner.logo} alt={partner.name} className="h-30 w-auto object-contain" />
  </div>
))}


</div>




    </section>
  )
}

export default Partners     