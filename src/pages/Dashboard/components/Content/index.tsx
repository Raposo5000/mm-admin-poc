import { ReactChild, ReactChildren } from 'react';
import { useStyles } from '../MaterialStyle';
import clsx from "clsx";

interface ContentProps {
  children?: ReactChild | ReactChildren;
  isDrawerOpen: boolean;
}

export const Content: React.FC<ContentProps> = ({children, isDrawerOpen}) => {

  const classes = useStyles();
  return <main
  className={clsx(classes.content, {
    [classes.contentShift]: isDrawerOpen,
  })}
>
  <div className={classes.drawerHeader} />
  {children}
</main>;
}
