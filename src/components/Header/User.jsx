import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useState } from "react";
import { Avatar, Paper, Popper, MenuItem, MenuList } from "@mui/material";

const User = (props) => {
  const { user, handleSignOut } = props;
  const [menuPopup, setMenuPopup] = useState(null);

  const handleClose = () => {
    setMenuPopup(false);
  };
  return (
    <div>
      <Avatar
        alt={user.displayName}
        src={user.photoURL}
        onClick={(event) => {
          setMenuPopup(true);
        }}
        className="cursor-pointer"
        aria-describedby={"id"}
      />
      {menuPopup ? (
        <Popper
          open={open}
          id={"id"}
          placement="bottom-start"
          transition
          disablePortal
          style={{
            position: "absolute",
            right: "0px",
            left: "auto",
            top: "auto",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      ) : null}
    </div>
  );
};

export default User;
