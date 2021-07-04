import React from 'react'
import Navbar from './Navbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';

import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import Feed from "./feed";
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Sidecard2 from "./Sidecard2";
import Othercards from "./Othercards";
import Adver from "./Adver"
import Header from './Header';
import Post from './posts';
import Ask from './Ask'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

function Dashboard () {
    //const classes = useStyles();
  //   const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };
  // function FormRow() {
  //     return(
  //     <React.Fragment>
  //       <Grid item sm={3} xs={12} >
  //         <Paper className={classes.paper}  id="re">
  //           <div>
  //           <Sidecard2 />
  //           </div>
  //           <br/>
            
  //           <div className={classes.root}>
  //           <List component="nav" aria-label="main mailbox folders" >
  //        <ListItem
  //           button
  //           selected={selectedIndex === '10'}
  //           onClick={(event) => handleListItemClick(event, '10')}>       
  //     <ListItemIcon className="x">
  //       <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText >All</ListItemText>
  //   </ListItem>
  //           <ListItem
  //           button
  //           selected={selectedIndex === '0'}
  //           onClick={(event) => handleListItemClick(event, '0')}>       
  //     <ListItemIcon className="x">
  //       <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText >Academics</ListItemText>
  //   </ListItem>
  //   <ListItem button
  //         selected={selectedIndex === '1'}
  //         onClick={(event) => handleListItemClick(event, '1')}>
  //     <ListItemIcon className="x">
  //     <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Admissions" />
  //   </ListItem>
  //   <ListItem button
  //         selected={selectedIndex === '2'}
  //         onClick={(event) => handleListItemClick(event, '2')}>
  //     <ListItemIcon className="x">
  //     <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Campus" />
  //   </ListItem>
  //   <ListItem button
  //         selected={selectedIndex === '3'}
  //         onClick={(event) => handleListItemClick(event, '3')}>
  //     <ListItemIcon className="x">
  //     <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Hostel" />
  //   </ListItem>
  //   <ListItem button
  //         selected={selectedIndex === '4'}
  //         onClick={(event) => handleListItemClick(event, '4')}>
  //     <ListItemIcon className="x">
  //     <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Faculty" />
  //   </ListItem>
  //   <ListItem button
  //         selected={selectedIndex === '5'}
  //         onClick={(event) => handleListItemClick(event, '5')}>
  //     <ListItemIcon className="x">
  //     <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Placement" />
  //   </ListItem>
  //   <ListItem button
  //         selected={selectedIndex === '6'}
  //         onClick={(event) => handleListItemClick(event, '6')}>
  //     <ListItemIcon className="x">
  //     <ArrowRightSharpIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Examination" />
  //   </ListItem>
  //     </List></div>
  //         </Paper>
  //       </Grid>
        
  //       <Grid item xs={12} sm={3}>
  //         <Paper className={classes.paper}>
  //         {/* <Feed />
  //          */}
  //          <br/>
  //          <br />
  //          <br />
  //          Ayush
  //         </Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={3}>
  //         <Paper className={classes.paper}>
  //         {/* <Othercards /> */}
  //         </Paper>
  //       </Grid>
  //     </React.Fragment>
  //     );
  // }
  // return(
  //     <div>
  //         <Header />
  //         <div className={classes.root}>
  //     <Grid container spacing={1}>
  //       <Grid container item xs={12} spacing={3}>
  //         <FormRow />
  //       </Grid>
  //     </Grid>
  //    </div>
  //    </div>
  // );
  const [selectedIndex, setSelectedIndex] = React.useState('-1');

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleSearchGet = (newvalue)=>{
    setSelectedIndex(newvalue);
    console.log('selectedIndex'+selectedIndex);
  }
  return(
  <Container>
    <Header value={selectedIndex} onSelect={handleSearchGet} />
    <Layout >
        {/* <div style={{background:'white',marginTop:'20px',borderRadius:'20px',boxShadow:"0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%)"}}> */}
        <Lt>
          <Left>
          
          <ListItem>
      
          <ListItemText className="y" ><b>Categories</b></ListItemText>
          {/* <ChevronLeftRoundedIcon className="x" /> */}
          </ListItem>
          <Divider className="x"/>
                  
                  <ListItem
                  button
                  selected={selectedIndex === '10'}
                  onClick={(event) => handleListItemClick(event, '10')}>       
            <ListItemIcon className="x">
              <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText >All</ListItemText>
          </ListItem>
                  <ListItem
                  button
                  selected={selectedIndex === '0'}
                  onClick={(event) => handleListItemClick(event, '0')}>       
            <ListItemIcon className="x">
              <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText >Academics</ListItemText>
          </ListItem>
          <ListItem button
                selected={selectedIndex === '1'}
                onClick={(event) => handleListItemClick(event, '1')}>
            <ListItemIcon className="x">
            <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Admissions" />
          </ListItem>
          <ListItem button
                selected={selectedIndex === '2'}
                onClick={(event) => handleListItemClick(event, '2')}>
            <ListItemIcon className="x">
            <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Campus" />
          </ListItem>
          <ListItem button
                selected={selectedIndex === '3'}
                onClick={(event) => handleListItemClick(event, '3')}>
            <ListItemIcon className="x">
            <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Hostel" />
          </ListItem>
          <ListItem button
                selected={selectedIndex === '4'}
                onClick={(event) => handleListItemClick(event, '4')}>
            <ListItemIcon className="x">
            <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Faculty" />
          </ListItem>
          <ListItem button
                selected={selectedIndex === '5'}
                onClick={(event) => handleListItemClick(event, '5')}>
            <ListItemIcon className="x">
            <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Placement" />
          </ListItem>
          <ListItem button
                selected={selectedIndex === '6'}
                onClick={(event) => handleListItemClick(event, '6')}>
            <ListItemIcon className="x">
            <ArrowRightSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Examination" />
          </ListItem>
          </Left>
          </Lt>
        {/* </div> */}
        <div>
          <Post select={selectedIndex}/>
        </div>
        
        <div>
          <Container1>
              <ArtCard>
                <UserInfo>
                  <CardBackground />
                  <a>
                    <Photo>
                      <img src={localStorage.getItem('pic')} ></img>
                      </Photo>
                    <Link>Welcome,{localStorage.getItem('Name')}!</Link>
                  </a>
                 
                </UserInfo>
                  
              </ArtCard>

              <CommunityCard>
                <a>
                  <span>{(localStorage.getItem('bio'))?localStorage.getItem('bio'):""}</span>
                </a>
              </CommunityCard>
            </Container1>
        </div>
      </Layout>
  </Container>
  );

}
const Container = styled.div`
  padding-top: 52px;
  padding-left:20px;  
  max-width: 100%;
`;
const Lt = styled.div`
  
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 2fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 5px 0;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Left = styled.div`
  grid-area: leftside;
  position: -webkit-sticky;
  position: sticky;
  margin-top:20px;
  position:fixed;
  background:white;
  margin-top:30px;
  padding-right:50px;
  border-radius:15px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  @media(min-width: 1200px){
    padding-right:100px;
  }
  @media(max-width: 1000px){
    margin-top:10px;
    background:transparent;
    box-shadow:none;
  }
  @media (max-width: 850px) {
    position:relative;
  }
`;
const Container1 = styled.div`
margin-top:5vh;
  grid-area: leftside;
  position: -webkit-sticky;
  position: sticky;
  position:fixed;
  right:20px;
  
  @media (max-width: 880px) {
    visibility:hidden;
  }
`;



const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  /* position: -webkit-sticky;
  position: sticky; */
  top: 0;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

// const a ='http://localhost:3001/'+localStorage.getItem('pic');
//   console.log(a);
const Photo = styled.div`
  box-shadow: none;
  /* background-image:url(a); */
  //background-image:url("/images/photo.svg");
  width: 72px;
  height: 72px;
  //box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  //border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
  img{
    box-shadow: none;
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    //margin: 0px auto 12px;
    border-radius: 50%;
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const CommunityCard = styled(ArtCard)`

  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
export default Dashboard;