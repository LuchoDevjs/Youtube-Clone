import { Stack } from "@mui/material";

import { categories } from "../utils/Constants";

export const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#0000FF",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#0000FF",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.6 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
