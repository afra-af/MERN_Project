import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// start with creating container , wrapper , search and then button
const Container=styled.div`
position: sticky; 
top: 0;
background-color: ${({theme})=> theme.bgLighter};
height:56px;
`;

// wrapper is for creating padding
const Wrapper=styled.div`
// to make search and sign in button horizontal 
display: flex;
align-items: center;
// to move search bar to end 
justify-content: flex-end;
// to move search button to middle
position: relative;
height:100%;
padding: 0px 20px;
`;
const Search=styled.div`
// because we gave position as absolute the search button has 100 % width and overlaps sign in button
width: 40%;
// to move search button to middle. 
position: absolute;
// to get even spacing from top left and right
left: 0px;
right: 0px;
margin: auto;
// to seperate search bar and search icon
display: flex;
align-items: center;
justify-content: space-between;

padding: 5px;
border: 1px solid #ccc;
border-radius: 4px;
`;
const Input=styled.input`
border: none;
background-color: transparent;

`;
const Button=styled.button`
border: 1px solid #3ea6ff ;
padding:5px 10px;
background-color: transparent;
color: #3ea6ff;
border-radius: 3px;
font-weigth: 500;

cursor: pointer;
//to space between signin logo and sign in text
display: flex;
align-item: center;
gap:5px;
`;



const Navbar=()=> {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>
          <Button><AccountCircleOutlinedIcon/> SIGN IN</Button>
          
          </Link>
      </Wrapper>
    </Container>
  )
}
export default Navbar