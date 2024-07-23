import React, { useState } from "react";
import Stars from "../stars/star";

import {
  CAlert,
  CButton,
  CCloseButton,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <section className={styles.container}>
      <Stars />
      <CNavbar className="--cui-dark-bg-subtle">
        <CContainer fluid>
          <CNavbarBrand>
            <img className={styles.logo} src="../image/gdacs-logo.png" alt="Logo" />
          </CNavbarBrand>
          <CNavbarToggler
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
          >
            <COffcanvasHeader>
              <COffcanvasTitle>Offcanvas</COffcanvasTitle>
              <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
            </COffcanvasHeader>
            <COffcanvasBody>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
              <CForm className="d-flex">
                <CFormInput type="search" className="me-2" placeholder="Search" />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </COffcanvasBody>
          </COffcanvas>
        </CContainer>
      </CNavbar>
    </section>
  );
}
