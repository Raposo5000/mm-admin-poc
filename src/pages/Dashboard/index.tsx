import { useState } from "react";

import { MenuDrawer } from "./components/MenuDrawer";
import { AppBarComponent } from "./components/AppBarComponent";
import { Content } from "./components/Content";

export const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
      <MenuDrawer handleDrawerClose={handleDrawerClose} open={open} />
      <Content isDrawerOpen={open}>Qualquer coisa</Content>
    </>
  );
};
