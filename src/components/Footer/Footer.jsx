"use client"

import Image from "next/image"
import "./styles.scss"
import LogoImg from "@/assets/images/logo.jpg"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <Image src={LogoImg} alt='Logo' width={90} height={90} />
          </div>

          <div className='footer-info'>
            <div className='footer-info__item'>
              <span className='footer-info__item-icon'>
                <i className='fa-solid fa-phone'></i>
              </span>
              <span>Hotline: 0987 219 933</span>
            </div>

            <div className='footer-info__item'>
              <span className='footer-info__item-icon'>
                <i className='fa-solid fa-envelope'></i>
              </span>
              <span>Email: htxsamnamnuidanhlc@gmail.com </span>
            </div>

            <div className='footer-info__item'>
              <span className='footer-info__item-icon'>
                <i className='fa-sharp fa-solid fa-location-dot'></i>
              </span>

              <span>
                Thôn Sấu, xã Liên Chung, huyện Tân Yên, tỉnh Bắc Giang.
              </span>
            </div>
          </div>
        </div>

        <div className='footer-copyright'>
          <span className='footer-copyright-text'>© Copyright 2023</span>

          <div className='footer-social'>
            <Link href='#' className='footer-social-item'>
              <i className='fa-brands fa-facebook-f'></i>
            </Link>

            <Link href='#' className='footer-social-item'>
              <i className='fa-brands fa-instagram'></i>
            </Link>

            <Link href='#' className='footer-social-item'>
              <i className='fa-brands fa-twitter'></i>
            </Link>

            <Link href='#' className='footer-social-item'>
              <i className='fa-brands fa-youtube'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
