import {Link, Typography} from "@mui/material";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Made with <FontAwesomeIcon icon={faHeart} beat bounce style={{color: "#e31b23"}}/> {`by `}
      <Link color="inherit" href="https://github.com/Neo2308">
        Radha Krishna
      </Link>
    </Typography>
  );
}
