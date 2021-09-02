import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../MaterialStyle";
import clsx from "clsx";
import { HamburgerIcon } from "../../../../components/Icons";

interface AppBarComponentProps {
  handleDrawerOpen: Function;
  open: boolean;
}

export const AppBarComponent: React.FC<AppBarComponentProps> = ({
  handleDrawerOpen,
  open,
}) => {
  const handleDrawerOpenClick = () => {
    handleDrawerOpen(!open);
  };

  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        {!open ? (
          <IconButton
            color="inherit"
            aria-label="Abrir menu"
            edge="start"
            onClick={handleDrawerOpenClick}
          >
            <HamburgerIcon size={22}/>
          </IconButton>
        ) : null}

        <Typography variant="h6" noWrap>
          MoneyMaker - Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
