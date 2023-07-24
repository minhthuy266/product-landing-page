import Image from "next/image"
import P1 from "@/assets/images/Product_Toi.jpg"
import P2 from "@/assets/images/Product_NuHoa.jpg"
import P3 from "@/assets/images/Product_Tuong.jpg"
import "./styles.scss"

const ProductDetail = ({params}) => {
  const products = [
    {
      id: 1,
      detail: "Tôi là tôi",
      image: P1,
    },

    {
      id: 2,
      detail: "Nụ hoa là nụ hoa",
      image: P2,
    },

    {
      id: 3,
      detail: "Tượng là tượng",
      image: P3,
    },
  ]

  return (
    <div className='product-detail'>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {product.id == params.id && (
              <div>
                <Image
                  src={product.image}
                  alt='img'
                  width='auto'
                  height='auto'
                />
                <h1>{product.detail}</h1>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProductDetail
