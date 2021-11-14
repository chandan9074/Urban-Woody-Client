import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigaion from '../Shared/Navigation/Navigation'

import {
  Link,
  useRouteMatch,
  Switch, 
  Route
} from "react-router-dom";

import useAuth from '../../hooks/useAuth';

import './dashboard.css';
import MyOrders from './MyOrders/MyOrders';
import AddReviews from './AddReviews/AddReviews';
import Payment from './Paymentpage/Payment';
import ManageAdmin from './MakeAdminpage/ManageAdmin';
import AddProduct from './AddProducespage/AddProduct';
import ManageOrder from './ManageOrderpage/ManageOrder';
import ManageProducts from './MangeProductpage/ManageProduct';
import DashboardHome from './Dashboardpage/Dashboard';
import DashboardAdmin from './Dashboardpage/DashboardAmin';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user, logout, admin} = useAuth()

  const { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(admin)

  const drawer = (
    <div>
      <Toolbar />
      <div className="flex justify-center flex-col items-center">
        {user.photoURL? <div><img src={user.photoURL} alt="" className="w-20 rounded-full" /></div>:<i class="fas fa-user text-4xl"></i>}
        <p className="text-lg text-black mt-2 mb-0">{user.displayName}</p>
         <Link to="/"  className="das-log-btn" onClick={logout}><span>Logout</span></Link>
      </div>
      <Divider />
      <List>
          <ListItem button key="Home" >
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <div className="mr-auto">
              <i class="fas fa-house-user text-base"></i>
              <Link to="/" className="ml-2 no-underline text-black font-semibold text-base">Home</Link>
            </div>
            {/* <ListItemText primary="Home" /> */}
          </ListItem>
          <ListItem button key="Home" >
            <div className="mr-auto">
              <i class="fas fa-house-user text-base"></i>
              <Link to="/explore" className="ml-2 no-underline text-black font-semibold text-base">Explore</Link>
            </div>
          </ListItem>
      </List>
      <Divider />
        {/* <Link to={`${url}/myorders`} className="ml-2 no-underline text-black font-semibold text-base">My Orders</Link> */}
        {!admin ?
      <List>
          <ListItem button>
            <div className="mr-auto">
              <i class="fas fa-tachometer-alt text-base"></i>
              <Link to={`${url}`} className="ml-2 no-underline text-black font-semibold text-base">Dashboard</Link>
            </div>
          </ListItem>
          <ListItem button>
            <div className="mr-auto">
              <i class="fas fa-sort-amount-down text-base"></i>
              <Link to={`${url}/my-orders`} className="ml-2 no-underline text-black font-semibold text-base">My Orders</Link>
            </div>
          </ListItem>
          <ListItem button>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <div className="mr-auto">
              <i class="fab fa-creative-commons-sampling-plus text-base"></i>
              <Link to={`${url}/add-reviews`}  className="ml-2 no-underline text-black font-semibold text-base">Add Review</Link>
            </div>
          </ListItem>
          <ListItem button>
            <div className="mr-auto">
            <i class="fas fa-file-invoice-dollar text-base"></i>
            <Link to={`${url}/payment`} className="ml-2 no-underline text-black font-semibold text-base">Payment</Link>
            </div>
          </ListItem>
      </List>:
      <>
      <Divider />
      <List>
          <ListItem button >
            <i class="fas fa-cart-plus text-base"></i>
            <Link to={`${url}/add-products`} className="ml-2 no-underline text-black font-semibold text-base">Add Products</Link>
            <ListItemText  />
          </ListItem>
          <ListItem button>
            <div className="mr-auto">
              <i class="fas fa-tasks text-base"></i>
              <Link to={`${url}/manage-products`} className="ml-2 no-underline text-black font-semibold text-base">Manage Products</Link>
            </div>
          </ListItem>
          <ListItem button >
            <i class="fas fa-clipboard-list text-base"></i>
            <Link to={`${url}/manage-orders`} className="ml-2 no-underline text-black font-semibold text-base">Manage Orders</Link>
            <ListItemText  />
          </ListItem>
          <ListItem button>
            <div className="mr-auto">
              <i class="fas fa-user-shield text-base"></i>
              <Link to={`${url}/manage-admin`} className="ml-2 no-underline text-black font-semibold text-base">Manage Admin</Link>
            </div>
          </ListItem>
      </List>
      </>
      } 
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-white"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="text-black" noWrap component="div">
            Urban Woody
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          <Route path={`${path}/add-reviews`}>
            <AddReviews />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/manage-admin`}>
            <ManageAdmin />
          </Route>
          <Route path={`${path}/add-products`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/manage-orders`}>
            <ManageOrder />
          </Route>
          <Route path={`${path}/manage-products`}>
            <ManageProducts />
          </Route>
          <Route path={path}>
            {admin? <DashboardAdmin /> : 
            <DashboardHome />}
          </Route>
        </Switch>
        {/* chandan */}
        {/* <Link to={`${url}/myorders`} className="ml-2 no-underline text-black font-semibold text-base">My Orders</Link> */}
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;