import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Button, Typography, Menu, Tooltip, MenuItem} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {actions as cartActions} from 'store/addToCart/actions';
import { makeStyles } from '@mui/styles';
import { transparent } from 'material-ui-colors';


const useStyles = makeStyles({
    rootWhiteButton: {
      background: transparent,
      border: 0,
      borderRadius: 3,
      boxShadow: 0,
      color: 'white',
      height: 48,
      padding: '0 20px',
    }
  });

const Cart = () => {
    const classes = useStyles()
    const products = useSelector(state => state.cart.cartProducts)
    const showCart = useSelector(state => state.cart.showCart)
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const showToggleCart = (e) => {
        setAnchorElNav(e.currentTarget)
        return dispatch(cartActions.openCartMenu(true))
    }
    const hideToggleCart = (value) => dispatch(cartActions.closeCartMenu(value))
    
    return (<>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart Item">
                <Button className={classes.rootWhiteButton} onClick={(e) => showToggleCart(e)} aria-label="add to shopping cart" startIcon={<ShoppingCartOutlinedIcon />}>
                    Cart
                </Button>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(showCart)}
                onClose={() => hideToggleCart(false)}
            >
                {products.map((item, index) => (
                    // <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <MenuItem key={index}>
                        <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    </>);
};
export default Cart;