"use client";

import { sidebarItems } from "@/constants/sidebar";
import Link from "next/link";
import "./styles.scss";
import Image from "next/image";
import LogoImg from 'public/assets/images/logo.png'
import { useEffect, useState } from "react";

const MenuMobile = ({ open, setOpen }) => {

  const [currentTab, setCurrentTab] = useState("/");

  useEffect(() => {
    if (window.location.pathname) {
      setCurrentTab(window.location.pathname);
    }
  }, [currentTab]);

  const handleChangeTab = (e) => {
    setCurrentTab(e.key);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="menu-mobile__wrapper"
      title="Menu"
      placement="right"
    >
      <div>
        <button className="close-btn" onClick={handleClose}>
        <i className="fa-regular fa-circle-xmark"></i>
        </button>

        <div className="menu-header">
          <Image src={LogoImg} width={90} height={90} alt="logo" />
        </div>

        <ul className="menu-list">
          {sidebarItems.map((menu, index) => (
            <li className="menu-list__item" key={index}>
              <Link 
                href={menu.key} 
                onClick={handleChangeTab}
                className={
                  currentTab === menu.key 
                      ? "active" 
                      : ""
                } 
              >
                <span>{menu.label}</span>
                {menu.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="menu-footer">
        <Link href="#" className="menu-footer-item">
          <i className="fa-brands fa-facebook-f"></i>
        </Link>

        <Link href="#" className="menu-footer-item">
          <i className="fa-brands fa-instagram"></i>
        </Link>

        <Link href="#" className="menu-footer-item">
          <i className="fa-brands fa-twitter"></i>
        </Link>

        <Link href="#" className="menu-footer-item">
          <i className="fa-brands fa-youtube"></i>
        </Link>
      </div>
    </div>
  );
};

export default MenuMobile;