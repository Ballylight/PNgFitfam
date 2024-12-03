"use client";
import NavbarMain from "./navbar";
import style from "./navbar.module.css";
import { useEffect } from "react";
// import { mergeText } from "@/app/add";
import { isPageExempt } from "../addons/addons";
import { usePathname } from "next/navigation";
// import React, { useEffect } from 'react'

function Header() {
  var classes = [style.header];
  var exempt = isPageExempt()
  useEffect(function () {
    document.querySelectorAll("NONE").forEach((el) => {
      el.style.display = "none";
    });
    if (!exempt){const header = document.getElementById("HEADER_SECTION");
    const sticky = document.getElementById("HEADER_STICKY_SIMULATOR");
    setInterval(()=>{
      sticky.style.height = `${header.offsetHeight}px`;
    },1)}
    
  }, []);
  return (
    <>
      {!exempt &&<>
        <div id="HEADER_SECTION" className={mergeText(...classes)}>
          <NavbarMain />
        </div>
        <div id="HEADER_STICKY_SIMULATOR" style={{ height: "140px" }}></div>
      </>}
    </>
  );
}

export default Header;
