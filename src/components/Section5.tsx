import { Button, Stack, TextField, Typography } from "@mui/material";
import c1 from "../assets/leotrippi.png";
import c2 from "../assets/beneoshop.png";
import c3 from "../assets/caspio.png";
import c4 from "../assets/HyperGrid.png";

const Section5 = () => {
  const companies = [c1, c2, c3, c4];
  return (
    <Stack direction={"column"} gap={3}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>You will be in good company.</Typography>
        <Stack direction={"row"} justifyContent={"center"} gap={10}>
          {companies.map((src) => (
            <img
              src={src}
              style={{
                width: "120px",
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#e8f4fa",
          padding: "64px",
          gap: "32px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Lorem Ipsum is simply dummy
          <br />
          text of the printing
        </Typography>
        <Stack direction={"row"} justifyContent={"center"} gap={2}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              backgroundColor: "white",
              width: "400px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              textTransform: "capitalize",
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section5;
