import React, { useState } from "react";
import logo from "../assets/asset-0.png";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function App() {
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar>
          <MDBNavbarNav>
          <div className="bg-black w-full mt-[-0.5%] py-2 text-sm font-semibold">
        <nav className="flex justify-between">
        <ul className=" flex items-center space-x-6 ml-16">
          <li><a href="" className="text-gray-50 hover:text-[#0068C8] transition duration-250">English</a></li>
          <li><a href="" className="text-gray-50 hover:text-[#0068C8] transition duration-250">USD</a></li>
          <li><a href="" className="text-white">Free Shipping On All Orders Over $100</a></li>
        </ul>
        <ul className="flex items-center justify-between space-x-5 mr-20">
          <li className="text-[#FCC904] space-x-2"><i class="fa-solid fa-bolt-lightning"></i><a href="" className="text-[#FCC904]">Flash Sale</a></li>
          <li className="text-gray-50 hover:text-[#0068C8] transition duration-250">Track Order</li>
          <li className="text-gray-50 hover:text-[#0068C8] transition duration-250">About</li>
          <li className="text-gray-50 hover:text-[#0068C8] transition duration-250">Contact</li>
          <li className="text-gray-50 hover:text-[#0068C8] transition duration-250">Blog</li>
        </ul>
        </nav>
    </div>
          </MDBNavbarNav>
        {/* </MDBContainer> */}
      </MDBNavbar>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer className="py-3">
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href="#">
            <img src={logo} className="h-12 w-48" alt="Logo"></img>
          </MDBNavbarBrand>
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBInputGroup tag="form" className="d-flex w-auto py-3">
                <div className="flex-grow ml-24">
                  <div className="flex items-center rounded-lg shadow-md overflow-hidden w-[710px] border-[#0068C8] border-2 bg-gray-100">
                    <select
                      name=""
                      id=""
                      className="h-full px-7 py-[12px] bg-gray-100 text-gray-700 focus:outline-none"
                    >
                      <option className="">All Categories</option>
                      <option>Camera</option>
                      <option>&nbsp;&nbsp;Accessories</option>
                      <option>&nbsp;&nbsp;Camera & Lenses</option>
                      <option>&nbsp;&nbsp;Drones</option>
                      <option>&nbsp;&nbsp;Security Cameras</option>
                      <option>Games</option>
                      <option>&nbsp;&nbsp;Accessories</option>
                      <option>&nbsp;&nbsp;Playstation 4</option>
                      <option>&nbsp;&nbsp;Playstation 5</option>
                      <option>&nbsp;&nbsp;Xbox Series</option>
                      <option>Headphones</option>
                      <option>&nbsp;&nbsp;AirPods</option>
                      <option>&nbsp;&nbsp;Gaming Headsets</option>
                      <option>&nbsp;&nbsp;Kids' Headphones</option>
                      <option>&nbsp;&nbsp;Wireless Earbuds</option>
                      <option>Iwatch</option>
                      <option>Laptops & Desktops</option>
                      <option>&nbsp;&nbsp;Accessories</option>
                      <option>&nbsp;&nbsp;Laptops</option>
                      <option>&nbsp;&nbsp;Monitors</option>
                      <option>Smart Home</option>
                      <option>SmartPhone</option>
                      <option>&nbsp;&nbsp;IPhone</option>
                      <option>&nbsp;&nbsp;Prepaid Phone</option>
                      <option>&nbsp;&nbsp;Samsung Galaxy</option>
                      <option>&nbsp;&nbsp;Unlocked Phones</option>
                      <option>Speakers</option>
                      <option>&nbsp;&nbsp;Bluetooth Speakers</option>
                      <option>&nbsp;&nbsp;Portable Speakers</option>
                      <option>&nbsp;&nbsp;Professional Speakers</option>
                      <option>&nbsp;&nbsp;Waterproof Speakers</option>
                      <option>Tablets</option>
                      <option>Television</option>
                      <option>&nbsp;&nbsp;55" TVs</option>
                      <option>&nbsp;&nbsp;65" TVs</option>
                      <option>&nbsp;&nbsp;OLED TVs</option>
                      <opt>&nbsp;&nbsp;QLED TVs</opt>
                    </select>
                    <span className="h-9 w-1 bg-gray-300 z-40"></span>
                    <input
                      type="text"
                      className="w-[710px] px-4 py-2 bg-gray-100 text-gray-700 focus:outline-none"
                      placeholder="Search for products"
                    />
                    <button className="bg-[#0068c8] h-12 w-36 text-[14px] text-white">SEARCH</button>
                  </div>
                </div>
              </MDBInputGroup>
            <div className="d-flex align-items-center pl-[5%]">
              <MDBNavbarItem className="d-flex align-items-center space-x-7">
                <MDBNavbarLink href="#">
                  <i className="fa-regular fa-heart text-3xl relative text-black">
                    <span className="bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                      0
                    </span>
                  </i>
                </MDBNavbarLink>
                <MDBNavbarLink href="#" className="d-flex align-items-center">
                  <i className="fa-regular fa-user text-3xl text-black"></i>
                  <div className="flex flex-col ml-2">
                    <span className="text-[#848484] text-[12px]">
                      My Account
                    </span>
                    <span className="text-sm font-bold text-black">Login</span>
                  </div>
                </MDBNavbarLink>
                <MDBNavbarLink href="#" className="d-flex align-items-center">
                  <i className="fa-solid fa-cart-shopping text-3xl relative text-black">
                    <span className="bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                      0
                    </span>
                  </i>
                  <div className="flex flex-col ml-2">
                    <span className="text-[#848484] text-[12px]">My Cart</span>
                    <span className="text-sm font-bold text-black">$0.00</span>
                  </div>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    <div>    
   </div>
    </>
  );
}
