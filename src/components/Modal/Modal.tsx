import React, { FC, ReactElement, memo } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./Modal.module.scss";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface ModalProps {
  open: boolean;
  headerType?: "image" | "text";
  header: string | ReactElement;
  footer: ReactElement;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}

      <IconButton
        aria-label="close"
        onClick={() => onClose()}
        className={styles.iconButton}
        color="primary"
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
}

const Modal: FC<ModalProps> = ({
  open,
  header,
  headerType,
  footer,
  children,
  onClose,
}) => {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      className={styles.modalContainer}
    >
      <div className={styles.modalContentContainer}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {header}
        </BootstrapDialogTitle>
        <DialogContent dividers className={styles.contentWrapper}>
          {children}
        </DialogContent>
      </div>

      {footer}
    </BootstrapDialog>
  );
};

export default memo(Modal);
