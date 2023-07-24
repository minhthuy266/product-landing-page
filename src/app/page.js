"use client"
import Image from "next/image"
import styles from "./page.module.css"
import HomeSlider from "@/components/HomeScreenComponents/HomeSlider/HomeSlider"
import "swiper/css"
import MainProduct from "@/components/HomeScreenComponents/MainProduct/MainProduct"

export default function Home() {
  return (
    <main className='root-container'>
      <div>
        <HomeSlider />
        <MainProduct />
      </div>
    </main>
  )
}
