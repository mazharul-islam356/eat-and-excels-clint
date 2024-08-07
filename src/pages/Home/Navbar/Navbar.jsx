import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";
import { FaBell } from "react-icons/fa6";
import useAllData from "../../../hooks/useAllData";
import { IoLogOutOutline } from "react-icons/io5";
import { blue } from "@mui/material/colors";






function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user, logOut } = React.useContext(AuthContext);
  const settings = [`${user?.displayName}`, "Dashboard", "Logout"];

  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out succecfullly"))
      .catch((err) => console.log(err));
  };

  const [meals] = useAllData();

  return (
    <AppBar style={{ backgroundColor: "#116A7B" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <IoRestaurant  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <img className="w-12 mr-2" src="https://i.ibb.co/kQ9YnYk/logo.png" alt="" />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Eats & Excells
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <div>
                <NavLink to="/">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    Home
                  </Button>
                </NavLink>

                <NavLink to="/login">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    Join Us
                  </Button>
                </NavLink>

                <NavLink to="/contact">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    Contact
                  </Button>
                </NavLink>

                <NavLink to="/AllMeals">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    Meals
                  </Button>
                </NavLink>

                <NavLink to="/dashBoard/upcoming">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    Upcoming Meals
                  </Button>
                </NavLink>
              </div>
            </Menu>
          </Box>

         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Eats & Excells
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: 250 },
            }}
          >
            <NavLink to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            </NavLink>

            <NavLink to="/AllMeals">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "white", display: "block" }}
              >
                Meals
              </Button>
            </NavLink>

            <NavLink to="/dashBoard/upcoming">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "white", display: "block" }}
              >
                Upcoming Meals
              </Button>
            </NavLink>

            <NavLink to="/login">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "white", display: "block" }}
              >
                Join Us
              </Button>
            </NavLink>

            <NavLink to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contact
              </Button>
            </NavLink>
          </Box>

          <Link to="/allMeals">
            <button
              data-tip="All Meals"
              className="mr-8 tooltip tooltip-bottom flex text-xl mt-1"
            >
              {" "}
              <FaBell></FaBell>
              <p className="text-sm font-bold text-[#ed3930]">{meals.length}</p>
            </button>
          </Link>

          {/* Profile and dashboard */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Click here">
              {user && (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="#" src={user.photoURL} />
                </IconButton>
              )}
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "Logout" ? (
                    <NavLink onClick={handleLogOut} to={!user && "/login"}>
                      <div className="flex items-center gap-1 text-red-800">
                      <Typography textAlign="center">
                        {user ? "Logout" : "Login"}
                      </Typography>
                      <IoLogOutOutline />
                      </div>
                    </NavLink>
                  ) : setting === "Dashboard" ? (
                    <NavLink to="/dashboard/profile">
                      <Typography textAlign="center">{setting}</Typography>
                    </NavLink>
                  ) : 
                  
                  (
                    
                    <Typography variant="h6" textAlign="center" className="text-light-blue-400 p-4 font-semibold">{setting}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
