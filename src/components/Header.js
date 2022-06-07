import React, { useState } from "react";
import styledComponents from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="./">
        <img src="./images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="./">
              {car}
            </a>
          ))}
        {/* <a href="./">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a> */}
      </Menu>

      <RightMenu>
        <a href="./">Shop</a>
        <a href="#">Car-Infinity Account</a>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>
      <BurgerNav className="container" show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">News and Reviews</a>
        </li>
        <li>
          <a href="./">Car Loan</a>
        </li>
        <li>
          <a href="#">EMI Calculator</a>
        </li>

        <SignOut>
          <Button
            type="submit"
            variant="contained"
            color="error"
            disableElevation
          >
            Sign Out
          </Button>
        </SignOut>

        <Text>
          <p>@2022 Sabah Pvt. Ltd</p>
        </Text>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styledComponents.div`
    z-index:100;
    min-height: 60px;
    position: fixed;
    display:flex;
    justify-content: space-between;
    align-item: center;
    top:0;
    left:0;
    right:0;
    img {
        height: 120px;
        margin-left: -2rem;
        margin-top: -1px;
        object-fit: contain;
      }
`;
const Menu = styledComponents.div`
    display:flex;  
    justify-content: center;
    align-items:center;
    flex: 1;
    
    a{
        font-weight:600;
        text-transform: uppercase;
        padding: 0 15px;
        flex-wrap: nowrap;
       
    }
    @media(max-width:780px){
        display:none;
    }
    
`;
const RightMenu = styledComponents.div`
    display:flex;  
    justify-content: center;
    align-items:center;

    a{
        font-weight:600;
        text-transform: uppercase;
        margin-right: 30px;
        letter-spacing:2px;
    }
`;

const CustomMenu = styledComponents(MenuIcon)`
    margin-right:19px;
    margin-left: -20px;
    cursor: pointer;
`;

const BurgerNav = styledComponents.div`
    overflow-x: scroll;
    -ms-overflow-style:none;
    scrollbar-width: none;
    margin-top: 45px;
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    list-style-type:none;
    width:300px;
    z-index: 1;
    border-radius: 50px ;
    max-height: 80vh;
    padding:30px;
    background: rgb(22,27,34);
    display:flex;
    flex-direction:column;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;
    text-align:start;
    li{
        padding:25px 0;
        border-bottom: 1px solid rgba(100,200,300,.2);
        a{
            color:rgb(201,209,217);
            font-weight:600;
        }
    }
    li:hover{
        background: grey;
        border-radius:10px;
        cursor:pointer;
    }
    @media(max-width:780px){
        margin-top:30px;
    }
`;

const CustomClose = styledComponents(CloseIcon)`
    cursor:pointer;
    
`;
const CloseWrapper = styledComponents.div`
    display:flex;
    justify-content: flex-end;
    padding:5px;
`;

const SignOut = styledComponents.div`
    display: flex;
    justify-content: center;
    margin-top:30px;
`;

const Text = styledComponents.div`
    margin-top: 40px;
`;
