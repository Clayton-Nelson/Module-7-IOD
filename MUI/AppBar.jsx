import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCurrentPageContext } from "../context/CurrentPageContext";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { currentPage, setCurrentPage } = useCurrentPageContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ mr: 2, color: "inherit" }}
            id="demo-positioned-button"
            edge="start"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/MUI" onClick={() => setCurrentPage({ page: "Home" })}>
                Home
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink
                to="/MUI/dash"
                onClick={() => setCurrentPage({ page: "Dashboard" })}
              >
                Dashboard
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink
                to="/MUI/bitcoinrates"
                onClick={() => setCurrentPage({ page: "Bitcoinrates" })}
              >
                Bitcoin Rates
              </NavLink>
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"start" }}>
            {currentPage.page}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
