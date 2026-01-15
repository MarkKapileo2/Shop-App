import React from 'react'
import Title from './Title'
import { dummyProducts } from '@/public/data'
import { Item } from './Item'


function NewArrivals() {
  return (
    <section className='max-padd-container py-16 xl:py-28'>
        <Title title1={"New"} title2={"Arrivals"} titleStyles={"pb-10"} />
        <div>
            <div/>
            <div>
                <div className='flex'>
                    {dummyProducts.slice(0, 8).map((product, index)=>(
                        <div key={index} className='w-56 mx-5 h-103 relative'>
                            <Item key={index} product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals