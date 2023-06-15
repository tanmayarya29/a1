import { Stack, Box, Typography, Button } from "@mui/material";
import person from "../assets/Bill Sitting using laptop 1.png";
const Section1 = () => {
  const mainText =
    "Experienced mobile and web \n applications and website \n builders measuring.";
  const secondaryText = `KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. `;
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#E4EEF3",
        padding: "104px 64px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "32px",
          textAlign: "left",
        }}
      >
        <Typography>
          {mainText.split("\n").map((text, index) => (
            <Typography
              sx={{
                fontWeight: "500",
                textTransform: "capitalize",
                fontSize: "33px",
                color: [1, 2].includes(index) ? "#000" : "primary.main",
              }}
              key={index}
            >
              {text}
              <br />
            </Typography>
          ))}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontWeight: "500",
          }}
        >
          {secondaryText}
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
            }}
          >
            View More
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={person}
          alt="person"
          style={{
            width: "250px",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Section1;
