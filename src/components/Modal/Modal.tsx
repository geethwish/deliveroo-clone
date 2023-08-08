import React, { FC, ReactElement } from "react";
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
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          className={styles.iconButton}
          color="primary"
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Modal: FC<ModalProps> = ({ open, header, headerType }) => {
  const handleClickOpen = () => {};
  const handleClose = () => {};
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      className={styles.modalContainer}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {header}
      </BootstrapDialogTitle>
      <DialogContent dividers className={styles.contentWrapper}>
        <Typography gutterBottom variant="h3" className={styles.title}>
          Salad Bundle
        </Typography>
        <Typography gutterBottom>
          A perfect healthy & delicious meal. Choose from one of our favourite
          salads, add a drink and snack for just £14.99
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions className={styles.actionWrapper}>
        <div>
          <IconButton aria-label="close" color="primary">
            <RemoveCircleOutlineIcon />
          </IconButton>
          1
          <IconButton aria-label="close" color="primary">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </div>
        <Button
          autoFocus
          onClick={handleClose}
          fullWidth
          variant="contained"
          className="custom-primary-button"
          disabled={true}
        >
          Add for £14.99
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default Modal;
