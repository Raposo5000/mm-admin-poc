import React from "react";

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { DashboardIcon, CloseIcon } from "../../../../components/Icons/index";
import { useStyles } from "../MaterialStyle"

interface MenuDrawerProps {
  handleDrawerClose: Function;
  open: boolean;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  handleDrawerClose,
  open,
}) => {
  const handleClickDrawer = (event: any) => {
    handleDrawerClose(event.target.value);
  };

  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClickDrawer}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon size={20}/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  );
};
