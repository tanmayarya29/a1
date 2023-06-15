import { Box, Stack, Typography } from "@mui/material";
import coding from "../assets/coding.png";
import seoTag from "../assets/seo-tag.png";
import immersive from "../assets/immersive.png";
import website from "../assets/website-content.png";

const Section2 = () => {
  const data = [
    {
      title: "Web Application",
      subtitle: "Lorem ipsum simply",
      image: website,
      bg: "#efeaff",
    },
    {
      title: "SEO",
      subtitle: "Lorem ipsum simply",
      image: seoTag,
      bg: "#ecffda",
    },
    {
      title: "AR/VR Solutions",
      subtitle: "Lorem ipsum simply",
      image: immersive,
      bg: "#dae6ff",
    },
    {
      title: "Mobile Application",
      subtitle: "Lorem ipsum simply",
      image: coding,
      bg: "#ffe5da",
    },
  ];
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        padding: "32px 96px",
        borderBottom: "1px solid #C4C4C4",
      }}
    >
      {data.map((item) => {
        const { title, subtitle, image, bg } = item;
        return (
          <Box
            key={title}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "30px",
                padding: "16px",
                backgroundColor: bg,
                borderRadius: "20px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: "500",
                  fontSize: "10px",
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Section2;
