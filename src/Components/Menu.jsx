import React from 'react'
import styled from 'styled-components'
import AfraTube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import UpdateIcon from '@mui/icons-material/Update';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Title= styled.h2`
font-size:14px;
font-wieght:500;
color: #aaaaaaa;
margin-bottom: 20px;
`;

/* to make menu container  */
const Container=styled.div`
flex:1;
background-color: ${({theme})=> theme.bgLighter};
height: 200vh;
color: ${({theme})=> theme.text};
font-size: 14px;
// becoz the container is not sticky to the the browser
position: sticky;
top:0;
`;
/*to add items inside the menu.first make a react var then add it inside function   */
const Wrapper=styled.div`
padding: 18px 26px;
`;
const Logo=styled.div`
display :flex;
align-item: center;
gap: 5px;
font-weight: bold;
margin-bottom:25px;
`;
const Img= styled.img`
height:25px;
`;
const Item=styled.div`
// flexbox is because you want to lay a collection of items out in one direction or another. As you lay out your items you want to control the dimensions of the items in that one dimension, or control the spacing between items.
display: flex;
align-items:center;
gap:20px;
//space between items 6, from left and right 0px
padding: 6px 0px; 
cursor: pointer;
 
&: hover{
  background-color: ${({theme})=> theme.soft};
}

`;

// create horizontal gap between items like subscriptions and library
const Hr= styled.hr`
//to separate items with margin
margin: 15px 0px;
border: 0.5px solid ${({theme})=> theme.soft};
`
const Login=styled.div``;
const Button=styled.button`
border: 1px solid #3ea6ff ;
padding:5px 10px;
background-color: transparent;
color: #3ea6ff;
border-radius: 3px;
font-weigth: 500;
margin-top:8px;
cursor: pointer;
//to space between signin logo and sign in text
display: flex;
align-item: center;
gap:5px;
`;



const Menu = ({darkMode, setDarkMode}) => {
  return (
    
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none"}}>
        <Logo>
          <Img src={AfraTube} />
          AfraTube
        </Logo>
        </Link>
        <Item>
        <HomeIcon/> Home
        </Item>
        <Item>
        <ExploreIcon/> Explore
        </Item>
        <Item>
        <SubscriptionsIcon/> Subscriptions
        </Item>
       <Hr/>
        <Item>
        <LibraryAddIcon/> Library
        </Item>
        <Item>
        <UpdateIcon/> History
        </Item>
        <Hr/>
        <Login>
          Sign in to like vidoes, comment and subscribe.
          
        <Link  to="signin" style={{textDecoration:"none"}} >
        <Button><AccountCircleOutlinedIcon/> SIGN IN</Button>
        </Link>
        </Login>
        <Hr />
       < Title>Best of AfraTube</Title>
        <Item>
        <LibraryMusicOutlinedIcon/> Music
        </Item>
        <Item>
        <SportsBasketballOutlinedIcon/> Sports
        </Item>
        <Item>
        <SportsEsportsOutlinedIcon/> Gaming
        </Item>
        <Item>
        <MovieCreationIcon/> Movies
        </Item>
        <Item>
        <NewspaperIcon/> News
        </Item>
        <Item>
        <LiveTvIcon/> Live
        </Item>
        <Hr/>
        <Item>
        <SettingsOutlinedIcon/> Settings
        </Item>
        <Item>
        <FlagOutlinedIcon/> Report
        </Item>
        <Item>
        <HelpOutlineOutlinedIcon/> Help
        </Item>
        <Item onClick={()=> setDarkMode(!darkMode)} >
        <SettingsBrightnessOutlinedIcon/> 
        {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
