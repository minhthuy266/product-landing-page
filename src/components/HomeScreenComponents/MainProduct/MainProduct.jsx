import ProductCard from "./ProductCard"
import "./styles.scss"
import P1 from "@/assets/images/Product_Toi.jpg"
import P2 from "@/assets/images/Product_NuHoa.jpg"
import P3 from "@/assets/images/Product_Tuong.jpg"

const MainProduct = () => {
  const products = [
    {
      id: 1,
      name: "Hành tỏi Tân Yên",
      price: 60000,
      image: P1,
      description: "Tôi là tôi",
    },

    {
      id: 2,
      name: "Nụ hoa Sâm Nam Núi Dành",
      price: 1200000,
      image: P2,
      description: "Nụ hoa Sâm Nam Núi Dành",
    },

    {
      id: 3,
      name: "Tương Liên Chung",
      price: 20000,
      image: P3,
      description: "Tương Liên Chung",
    },
  ]

  return (
    <div className='product-section'>
      <h1 className='product-section__title'>Sản phẩm</h1>

      <div className='product-section__list'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            id={product.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MainProduct
