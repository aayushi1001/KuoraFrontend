import React from 'react'
import Navbar from './Navbar';
//import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';

import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import "./main.styles.css"
import Feed from "./feed";
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Sidecard from "./Sidecard";
import Othercards from "./Othercards";
import Adver from "./Adver"
import Header from './Header';
import Post from './posts';
import Ask from './Ask'
function Main () {

  const [selectedIndex, setSelectedIndex] = React.useState('-1');

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleSearchGet = (newvalue)=>{
    setSelectedIndex(newvalue);
    console.log('iiiiiiiiiii'+selectedIndex);
  }
    return (
        <div>
          <Header value={selectedIndex} onSelect={handleSearchGet} />
          {/* <Navbar name={localStorage.getItem('Name')}/> */}
            <div className="Card">
            <Sidecard /><br/>
            </div>
            <div className="sidebar">
            
            <ListItem>
      
      <ListItemText className="y" >Categories</ListItemText><ChevronLeftRoundedIcon className="x" />
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
</div>
        {/* <Feed item={selectedIndex} /> */}
        <div className="feed">
          <div className="ask">
            {/* <Ask/> */}
          </div>
          
          <Post select={selectedIndex}/>
          </div>
        <Othercards />
        <Adver />
        </div>
    )
}

export default Main
