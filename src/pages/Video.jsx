import React from 'react'
import { styled } from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../Components/Comments';
import  Card from '../Components/Card';



const Container= styled.div`
display:flex;
gap: 24px;
`;

const Content= styled.div`
flex: 5;
`;

const Recommendation=styled.div`
flex: 2;
`;
// after video comments and channel name
const Channel = styled.div`
display:flex;
justify-content:space-between;
`;
const ChannelInfo=styled.div`
display:flex;
gap:20px ;
`;
const Image=styled.img`
width: 50px;
height:50px;
border-radius: 50%;

`;
const ChannelDetail=styled.div`
display: flex;
flex-direction: column;
color: ${({theme})=> theme.text};
`;
const ChannelName=styled.span`
font-weight:500;
`;
const ChannelCounter=styled.span`
margin-top:5px;
margin-bottom: 20px;
color: ${({theme})=> theme.textSoft};
font-size: 12px;
`;
const Description=styled.div`

font-size:13px;
`;
const  Subscribe=styled.button`
background-color: red;
font-weight:500;
color: white;
border:none;
border-radius:3px;
height: max-content;
 cursor: pointer;
 padding: 10px 20px;


`;

// add video in wrapper inside the Container 
const VideoWrapper= styled.div``;
const Title= styled.h1`
font-size: 18px;
font-weight: 400;
margin-top:20px;
margin-bottom: 10px;
color: ${({theme})=> theme.text};
`;
const Details= styled.div`
display:flex;
align-item:center;
justify-content: space-between;

`;
const Info = styled.span`
color: ${({theme})=> theme.textSoft};


`;
const Buttons= styled.div`
display:flex;
gap: 20px;
color: ${({theme})=> theme.text};

`;
const Button= styled.div`
display:flex;
gap: 20px;
gap:5px;
cursor: pointer;
`;
// horizontal line after video
const Hr= styled.div`
margin: 15px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`;



const Video = () => {
  return (
    <Container>
<Content>
<VideoWrapper>
<iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
</VideoWrapper>

<Title>Test Video</Title>
<Details>
  <Info>7,890 Views * Jun 22, 2022</Info>
  <Buttons>
    <Button><ThumbUpOutlinedIcon/> 12345</Button>
    <Button><ThumbDownAltOutlinedIcon/>Dislikes</Button>
    <Button><ReplyOutlinedIcon/>Share</Button>
   <Button> <AddTaskOutlinedIcon/>Save</Button>
  </Buttons>
</Details>
<Hr/>
<Channel>
  <ChannelInfo>
  <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
 <ChannelDetail>
  <ChannelName>Afra</ChannelName>
  <ChannelCounter>200K Subscribers</ChannelCounter>
  <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum illo aliquid dolorum obcaecati veritatis. Aperiam, at eius. Ea eum, culpa iste soluta voluptate dolore debitis tempore doloribus itaque aperiam.</Description>
 </ChannelDetail>
  </ChannelInfo>
  <Subscribe>Subscribe</Subscribe>
</Channel>
<Hr/>
<Comments/>
</Content>
<Recommendation>
<Card type="sm"/>
<Card type="sm"/>
<Card type="sm"/>
<Card type="sm"/>
<Card type="sm"/>
<Card type="sm"/>
<Card type="sm"/>
<Card type="sm"/>
</Recommendation>
    </Container>
  )
}

export default Video
