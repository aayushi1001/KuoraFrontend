import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
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

export default function Sidecard2() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}  variant="outlined">
      <CardContent>
        
      <center><Avatar alt="Remy Sharp" src={localStorage.getItem('pic')} id="avtar" /></center>

        <Typography variant="body2" component="p" id="avtar_text">
          <br/>
          
         <center> Welcome {localStorage.getItem('Name')} !</center>
        </Typography>
      </CardContent>
    </Card>
  );
}