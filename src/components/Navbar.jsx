import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";
import { logo } from "../utils/Constants";
import { ImYoutube2 } from "react-icons/im";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {/* <img src={logo} alt="logo" height={45} /> */}
        <ImYoutube2
          height={45}
          color="blue"
          size={70}
          style={{ margin: "0px 20px" }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};
