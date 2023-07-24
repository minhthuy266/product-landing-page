import {Swiper, SwiperSlide} from "swiper/react"
import "./styles.scss"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import P1 from "@/assets/images/Product_Toi.jpg"
import P2 from "@/assets/images/Product_NuHoa.jpg"
import P3 from "@/assets/images/Product_Tuong.jpg"
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules"

const HomeSlider = () => {
  return (
    <div className='home-slider'>
      <Swiper
        pagination={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
        slidesPerView={1}
        autoplay={true}
        loop={true}>
        <SwiperSlide>
          <Image src={P1} alt='img' width='auto' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={P2} alt='img' width='auto' height='auto' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={P3} alt='img' width='auto' height='auto' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider
