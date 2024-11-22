import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useState } from "react";
import {
  Button,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
} from "@mui/material";
import User from "./User";
import AdminDrawer from "./AdminDrawer";

const AdminHeader = (props) => {
  const { user } = props;
  const googleProvider = new GoogleAuthProvider();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Portal
          </Typography>
          {drawerOpen && <AdminDrawer setDrawerOpen={setDrawerOpen} />}
          {!user ? (
            <Button
              variant="contained"
              color="inherit"
              onClick={handleSignIn}
              endIcon={<GoogleIcon />}
            >
              Login
            </Button>
          ) : (
            <User user={user} handleSignOut={handleSignOut} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminHeader;
