"use client"

import Image from "next/image"
import {useEffect, useState} from "react"
import LogoImg from "@/assets/images/logo.jpg"
import "./styles.scss"
import {sidebarItems} from "@/constants/sidebar"
import Link from "next/link"

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("/")

  useEffect(() => {
    if (window.location.pathname) {
      setCurrentTab(window.location.pathname)
    }
  }, [currentTab])

  const handleChangeTab = (e) => {
    setCurrentTab(e.key)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Image src={LogoImg} width={120} height={120} alt='' />
      </div>

      <div className='sidebar-content'>
        {sidebarItems.map((item, index) => (
          <div className='sidebar-content-item' key={index}>
            <Link
              href={item.key}
              className={
                currentTab === item.key
                  ? "sidebar-content-item-title-active sidebar-content-item-title"
                  : "sidebar-content-item-title"
              }
              onClick={handleChangeTab}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>

      <div className='sidebar-footer'>
        <Link href='#' className='sidebar-footer-item'>
          <i className='fa-brands fa-facebook-f'></i>
        </Link>

        <Link href='#' className='sidebar-footer-item'>
          <i className='fa-brands fa-instagram'></i>
        </Link>

        <Link href='#' className='sidebar-footer-item'>
          <i className='fa-brands fa-twitter'></i>
        </Link>

        <Link href='#' className='sidebar-footer-item'>
          <i className='fa-brands fa-youtube'></i>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
