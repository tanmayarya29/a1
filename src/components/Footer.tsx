import { Divider, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        sx={{
          padding: "64px",
          gap: "64px",
        }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={2}
          sx={{
            width: "300px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "primary.main",
            }}
          >
            LOGO
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              textAlign: "left",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            @lorem
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={2}
          sx={{
            width: "200px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Lorem
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Portfolio
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Careers
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Contact us
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={2}
          sx={{
            width: "300px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
            }}
          >
            Contact us
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              textAlign: "left",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            +91 1234567890
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={2}
        >
          {/* 4 social media icons in a row*/}
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Divider
        sx={{
          width: "80%",
        }}
      />
      <Typography
        sx={{
          padding: "16px",
          textAlign: "center",
          color: "text.secondary",
        }}
      >
        Copyright ® 2021 Lorem All rights Rcerved
      </Typography>
    </Stack>
  );
};

export default Footer;
