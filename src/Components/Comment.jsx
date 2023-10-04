import React from 'react'
import { styled } from 'styled-components'
import Channelimg from "../img/logo.png"

const Container= styled.div`
display:flex;
gap: 10px;
// to remove closeness between comments
margin: 30px 0px;
`;
const Avatar= styled.img`
width: 50px;
height:50px;
border-radius: 50%;
`
;
const Details = styled.div`
display:flex;
// these gonna be vertical not horizontal 
flex-direction: column;
gap: 10px;
color: ${({theme})=> theme.text};
`;
const Name= styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date= styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=> theme.textSoft};
//space between date and name 
margin-left:5px ;


`;
const Text= styled.span`
font-size: 14px;
`;




const Comment = () => {
  return (
    <Container>
      <Avatar src={Channelimg}/>
<Details>
    <Name>Afra <Date> 1 day ago </Date></Name>
    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem illum dicta odit laborum tenetur magni error suscipit quae sapiente. Voluptates suscipit beatae excepturi aperiam quis tempora quisquam numquam nulla?</Text>
</Details>
    </Container>
  )
}

export default Comment
