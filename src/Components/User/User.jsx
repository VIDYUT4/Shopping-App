import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Button, Typography, Menu, Tooltip, MenuItem} from '@mui/material';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import {actions as userActions} from 'store/usersControl/actions';
import { makeStyles } from '@mui/styles';
import { transparent } from 'material-ui-colors';
import {actions as loginAction} from 'store/login/actions';


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

const User = () => {
    const classes = useStyles();

    const loginModelStatus = useSelector(state => state.login.showLoginModel);
    const [openModel, setOpenModel] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setOpenModel(loginModelStatus)
    }, [openModel]);
    const handleModelOpen = () => dispatch(loginAction.showLoginModel(true));

    const menuItems = [
        {itemName: 'signUp', menuDetails: <span onClick={()=>handleModelOpen()}><ExitToAppRoundedIcon sx={{ mr: '10px' }}/> Sign In</span> },
        {itemName: 'myProfile', menuDetails: <span><AccountCircleOutlinedIcon sx={{ mr: '10px' }}/> My Profile</span>},
        {itemName: 'myOrders', menuDetails: <span><SendAndArchiveIcon sx={{ mr: '10px' }}/> My Orders</span>},
        {itemName: 'wishLists', menuDetails: <span><FavoriteBorderIcon sx={{ mr: '10px' }}/> Wish Lists</span>},
        {itemName: 'rewards', menuDetails: <span><EmojiEventsIcon sx={{ mr: '10px' }}/> Rewards</span>},
        {itemName: 'giftCard', menuDetails: <span><CardGiftcardIcon sx={{ mr: '10px' }}/> Gift Card</span>}
    ]
    const showUserMenu = useSelector(state => state.users.showUserMenu)
    const [anchorElUser, setAnchorElUser] = useState(null);
    const showToggleCart = (e) => {
        setAnchorElUser(e.currentTarget)
        return dispatch(userActions.usersNavShow(true))
    }
    const hideToggleCart = (value) => dispatch(userActions.usersNavHide(value))
    
    return (<>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open User Menu">
                <Button className={classes.rootWhiteButton} onClick={(e) => showToggleCart(e)} aria-label="Open User Menu" startIcon={<ExitToAppRoundedIcon />}>
                    Login
                </Button>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(showUserMenu)}
                onClose={() => hideToggleCart(false)}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.itemName} className="userMenu">
                        <Typography component={'span'} textAlign="center">{item.menuDetails}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    </>);
};
export default User;