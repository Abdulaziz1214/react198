import React, { useEffect, useState } from 'react'

const Elementlar = () => {

  const [productlar, setProductlar] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(response=>response.json())
    .then(data=>{
      setProductlar(data.products)
    })
  }, [])
  return (
    <div>
      <h1>Продукты</h1>

      {productlar.map((product) => (
        <div className='w-[300px] h-[500px] border-2 bg-amber-200 text-red-400 text-center' key={product.id}>{product.title}</div>
      ))}
    </div>
  )
}

export default Elementlar
