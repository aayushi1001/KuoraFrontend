import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Ask from './Ask'
import { Link } from 'react-router-dom'
import styled from "styled-components";
//import "./othercards.style.css"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Othercards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} id="othercards" variant="outlined">
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
         Ayushhhhhhhh
        </Typography> */}
        <NavList>
        <Typography variant="h5" component="h2">
          Write Something!!
        </Typography>
        </NavList>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
          {/* <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          <center>
          <NavList>
          <Link to ="/Send">
                            <img src="/images/send.svg" height="30px" width="30px"alt="" />
                            <span>Post</span>
                            </Link>
                            </NavList>
                            </center>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        {/* <Ask/> */}
      </CardActions>
    </Card>
  );
}
const NavList = styled.li`
  display: flex;
  align-items: center;
  justify-content:center;
  a {
    margin-top:30px;
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 62px;
    min-width: 120px;
    position: relative;
    text-decoration: none;
    box-shadow: 5px 5px 15px #d3cece;
    /* border: 2px solid #3f51b5; */
    border-radius:20%;
    img {
      margin-top: 10px;
    }
    span {
      padding: 5px 0px 5px 0px;
      font-weight:700;
      color: #1a237e;
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;