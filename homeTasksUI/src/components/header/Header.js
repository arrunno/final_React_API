import * as React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {AppBar, Badge, Button, Link, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {removeUser} from "../../store/slice/userSlice";


export default () => {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((sum, product) => sum + product.count, 0);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // export default function AccountMenu() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        const onLogout = () => {
            dispatch(removeUser());
            navigate("/");
        }

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}>
                    <Link
                        variant="button"
                        color="text.primary"
                        to="/"
                        sx={{my: 1, mx: 1.5, fontSize: 20}}
                        underline="none"
                        component={NavLink}>
                        Company name
                    </Link>
                </Typography>
                <nav>
                    { user &&
                        <>
                            <Link
                                variant="button"
                                color="text.primary"
                                to="/tasks/create"
                                sx={{my: 1, mx: 1.5}}
                                component={NavLink}>
                                Create new task
                            </Link>
                            { user.roles.includes('ADMIN') &&
                                <Link
                                    variant="button"
                                    color="text.primary"
                                    to="/users/registration"
                                    sx={{my: 1, mx: 1.5}}
                                    component={NavLink}>
                                    Create new user
                                </Link>
                            }
                        </>

                    }
                    <Link
                        variant="button"
                        color="text.primary"
                        to="/cart"
                        sx={{my: 1, mx: 1.5}}
                        component={NavLink}>
                        <Badge badgeContent={totalItems} color="primary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </Link>
                </nav>
                {
                    user ?
                              <>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ml: 2}}>
                                            <Avatar sx={{width: 32, height: 32}}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                    >
                                        <MenuItem>
                                            <Avatar/> {user.fullName}
                                        </MenuItem>
                                        {/*<MenuItem>*/}
                                        {/*    <Avatar/> My account*/}
                                        {/*</MenuItem>*/}
                                        <Divider/>
                                        {/*<MenuItem>*/}
                                        {/*    <ListItemIcon>*/}
                                        {/*        <PersonAdd fontSize="small"/>*/}
                                        {/*    </ListItemIcon>*/}
                                        {/*    Add another account*/}
                                        {/*</MenuItem>*/}
                                        {/*<MenuItem>*/}
                                        {/*    <ListItemIcon>*/}
                                        {/*        <Settings fontSize="small"/>*/}
                                        {/*    </ListItemIcon>*/}
                                        {/*    Settings*/}
                                        {/*</MenuItem>*/}
                                        <MenuItem onClick={onLogout}>
                                            <ListItemIcon>
                                                <Logout fontSize="small"/>
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </>
                                :
                                <Button variant="outlined"
                                        sx={{my: 1, mx: 1.5}}
                                        to="/login"
                                        component={NavLink}>
                                    Login
                                </Button>
                }
                <LanguageSwitcher/>
            </Toolbar>
        </AppBar>
    )
}
