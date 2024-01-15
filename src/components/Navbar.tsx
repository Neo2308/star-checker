import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Star Checker
        </Typography>
        <Button component={Link} href={'https://github.com/Neo2308/star-checker'} color="secondary"
                variant="contained" startIcon={<FontAwesomeIcon icon={faGithub}/>}>View Source</Button>
      </Toolbar>
    </AppBar>
  )
}
