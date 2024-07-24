import React, { useState } from "react";
import Stars from "../stars/star";

import {
  CCloseButton,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <section className={styles.container}>
      <Stars />
      <CNavbar className="cui-dark-bg-subtle">
        <CContainer fluid style={{ position: "relative" }}>
          <CNavbarBrand>
            <img
              style={{ position: "absolute", left: 50 }}
              className={styles.logo}
              src="../image/gdacs-logo.png"
              alt="Logo"
            />
          </CNavbarBrand>

          <img
            src="../image/menu.png"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              right: 50,
              top: 20,
            }}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
          <COffcanvas
            id="offcanvasNavbar"
            placement="end"
            portal={false}
            visible={visible}
            onHide={() => setVisible(false)}
            className={styles.canva}
          >
            <COffcanvasHeader style={{position:"relative"}}>
              <COffcanvasTitle style={{color:"white" , fontSize:"3vh"}}>Жидакс</COffcanvasTitle>
              <CCloseButton
                style={{backgroundColor:"yellow", position:"absolute", right:"30px"}}
                className={styles.reset}
                onClick={() => setVisible(false)}
              />
            </COffcanvasHeader>
            <COffcanvasBody>
              <CNavbarNav style={{display:"flex", gap:"30px", fontSize:"2.3vh"}}>
                <CNavItem>
                  <CNavLink
                    style={{ fontWeight: 500 , color:"white" }}
                    href="#бидний-тухай"
                    active
                  >
                    БИДНИЙ ТУХАЙ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    style={{ fontWeight: 500 , color:"white"  }}
                    href="#үйл-ажиллагааны-чиглэл"
                    active
                  >
                    ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#төлөөлөн-уулзах-зөвлөл"
                    style={{ fontWeight: 500 , color:"white" }}
                    active
                  >
                    ТӨЛӨӨЛӨН УУЛЗАХ ЗӨВЛӨЛ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#үйл-ажиллагаа-санхүүгийн-тайлан"
                    style={{ fontWeight: 500 , color:"white"  }}
                    active
                  >
                    ҮЙЛ АЖИЛЛАГАА, САНХҮҮГИЙН ТАЙЛАН
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" style={{ fontWeight: 500 , color:"white"  }} active>
                    ХУУЛЬ, ЭРХ ЗҮЙ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#холбоо-барих"
                    style={{ fontWeight: 500 , color:"white" }}
                    active
                  >
                    ХОЛБОО БАРИХ
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </COffcanvasBody>
          </COffcanvas>
        </CContainer>
      </CNavbar>
    </section>
  );
}
