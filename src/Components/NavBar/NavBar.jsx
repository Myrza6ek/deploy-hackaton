import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import LiveSearch from "../LiveSearch/LiveSearch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useContext, useEffect } from "react";
// import { Link } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { teal } from "@mui/material/colors";
// import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";
import { productContext } from "../../context/ProductContextProvider";

function NavBar() {
  const { cartCount } = useContext(cartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const location = useLocation();

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const { readProduct } = useContext(productContext);
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    readProduct();
  }, []);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ backdropFilter: "blur(20px)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              <img
                src="https://cdn2.vectorstock.com/i/1000x1000/59/46/logo-combination-of-d-letter-and-tooth-vector-5925946.jpg"
                alt="logo"
                style={{ width: "2vw" }}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#55c2ce",
                  backgroundColor: "white",
                }}>
                ental Shop
              </Typography>
            </IconButton>
          </Link>

          <LiveSearch />

          <Box
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "space-around",
            }}>
            <Link
              to="/"
              style={{
                fontWeight: "bold",
                color: "#083430",
                textDecoration: "none",
                cursor: "pointer",
              }}>
              Главная
            </Link>

            {location.pathname === "/list" ? (
              <span style={{ cursor: "pointer" }}>Каталог</span>
            ) : (
              <Link
                to="/list"
                style={{
                  fontWeight: "bold",
                  color: "#083430",
                  textDecoration: "none",
                  cursor: "pointer",
                }}>
                Каталог
              </Link>
            )}

            <Link
              style={{
                fontWeight: "bold",
                color: "#083430",
                textDecoration: "none",
                cursor: "pointer",
              }}>
              О нас
            </Link>
            <Link
              to="/add"
              style={{
                fontWeight: "bold",
                color: "#083430",
                textDecoration: "none",
                cursor: "pointer",
              }}>
              Для админа
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                sx={{ bgcolor: teal[300], color: "white" }}>
                <Badge badgeContent={cartCount} color="primary">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {/* <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="headerLeft">
                  <img width={200} height={200} src={cart?.img1} />
                  <div className="headerInfo">
                    <h3>{cart?.category}</h3>
                    <p className="opacity-5">{cart?.title}</p>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    handleClose();
                  }}>
                  clear cart
                </Button>
              </Typography>
            </Box>
          </Modal>
        </div> */}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar;
