import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProductCard = ({image, price, name, id}) => {
  return (
    <div>
      <Image src={image} alt='img' width='auto' height='auto' />

      <Link href={`/product/${id}`}>
        <div className='product-desc'>
          <h3>{name}</h3>
          <p>
            {price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
