'use client'
import React, { useState , useEffect} from 'react'
import Title from './Title'
import { Item } from './Item'
import { useAppContext } from '@/context/AppContext'

function RelatedProducts({product}) {
    const {products} = useAppContext()
    const [related, setRelated] = useState([])

    useEffect(()=>{
        const data = products.filter((item)=> item.category === product.category)
        setRelated(data)
        
    }, [products])
  return (
    <section className='max-padd-container py-16 xl:py-28'>
        <Title title1={"Related"} title2={"Products"} titleStyles={"pb-10"} />
        
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-8 gap-y-12!'>
                    {related.slice(0, 5).map((product, index)=>(
                        <div key={index} className='w-56 mx-5 h-103 relative'>
                            <Item key={index} product={product}/>
                        </div>
                    ))}
                </div>

    </section>

  )
}

export default RelatedProducts