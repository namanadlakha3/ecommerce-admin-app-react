import AdminHeader from "./Header/AdminHeader";
import UnauthorizedUser from "./Message/UnauthorizedUser";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const AdminPortal = () => {
  const [user, setUser] = useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AdminHeader user={user} />
        {!user ? <UnauthorizedUser /> : <h1>Admin Portal</h1>}
      </ThemeProvider>
    </>
  );
};

export default AdminPortal;
