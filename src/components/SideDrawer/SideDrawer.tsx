import React, { FC, ReactElement } from "react";
import { Divider, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./SideDrawer.module.scss";

interface SideDrawerProps {
  position?: "right" | "left" | "top" | "bottom";
  open: boolean;
  onClose: (value: boolean) => void;
  onOpen: (value: boolean) => void;
  title: string | ReactElement;
  content?: string | ReactElement;
}

const SideDrawer: FC<SideDrawerProps> = ({
  position = "right",
  open,
  onClose,
  onOpen,
  title,
  content,
}) => {
  return (
    <SwipeableDrawer
      anchor={position}
      open={open}
      onClose={() => onClose(false)}
      onOpen={() => onOpen(true)}
    >
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <div>{title}</div>
          <div onClick={() => onClose(false)}>
            <CloseIcon color="primary" />
          </div>
        </div>
        <Divider />
        <div className={styles.contentContainer}>{content}</div>
      </div>
    </SwipeableDrawer>
  );
};

export default SideDrawer;
