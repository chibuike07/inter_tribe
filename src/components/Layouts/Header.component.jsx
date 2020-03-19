import { useStyles } from "../../styles/lib/header.styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Links from "../../reuseable_component/Links";
import React from "react";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Links
              text={"Tribr"}
              nav={"/"}
              textDecoration={"none"}
              color={"#fff"}
            />
          </Typography>
          <Links
            text={<Button color="inherit">About</Button>}
            nav={"/about"}
            color={"#fff"}
            textDecoration={"none"}
          />
          <Links
            text={<Button color="inherit">Contact</Button>}
            nav={"/contact"}
            color={"#fff"}
            textDecoration={"none"}
          />
          <Links
            nav={"/login"}
            color={"#fff"}
            textDecoration={"none"}
            text={<Button color="inherit">Get Started</Button>}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
