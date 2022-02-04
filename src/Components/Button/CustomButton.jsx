import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 32,
    padding: '20px 20px',
  },
});

 const CustomButton = (props) => {
  const classes = useStyles();
  return <Button type={props.type} className={classes.root} sx={{ mt: 2, mb: 2 }} onClick={props.handleClick} {...props}>{props.buttonText}</Button>;
}
CustomButton.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  handleClick: PropTypes.func
};
CustomButton.defaultProps = {
  type: "button",
  buttonText: "Button",
  handleClick: () => void 0
}

export default CustomButton;