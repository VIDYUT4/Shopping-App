import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  rootButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 20px',
  },
  rootButtonBlue: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 32,
    padding: '0 20px',
  },
});

 const ImgMediaCard = (props) => {
  const classes = useStyles();
  const {items} = props;
  console.log(items)
    return (<Card >
      <CardMedia
        component="img"
        alt={items.title}
        image={items.image}
        className="cardMedia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="cardHeader">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="cardBody">
          {items.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.rootButton} size="small" onClick={() => props.addProduct}>Add to Cart</Button>
        <Button className={classes.rootButtonBlue} size="small">Buy Now</Button>
      </CardActions>
    </Card>)
 };

export default ImgMediaCard;