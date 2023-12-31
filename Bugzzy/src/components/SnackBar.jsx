import { Snackbar } from "@mui/material";
const SnackBar = ({ handleClose, open, children }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      {children}
    </Snackbar>
  );
};

export default SnackBar;
