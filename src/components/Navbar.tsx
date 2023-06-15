import { Box, Button, Link, Stack, Typography } from "@mui/material";

const Navbar = () => {
  const data = {
    logo: "logo",
    items: [
      { name: "Home", isActive: true },
      { name: "About us", isActive: false },
      { name: "Services", isActive: false },
      { name: "Blog", isActive: false },
    ],
    rightButton: "Contact us",
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        padding: "32px",
        borderBottom: "2px solid #C4C4C4",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "primary.main",
            textTransform: "uppercase",
          }}
        >
          logo
        </Typography>
      </Box>
      <Box>
        <Stack
          direction="row"
          gap={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {data.items.map((item) => {
            const { name, isActive } = item;
            return (
              <Link
                key={name}
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "none",
                  color: isActive ? "primary.main" : "#000",
                  cursor: "pointer",
                }}
              >
                {name}
              </Link>
            );
          })}
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {data.rightButton}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Navbar;
