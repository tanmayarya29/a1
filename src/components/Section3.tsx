import { Stack, Typography } from "@mui/material";
import CustomBox, { CustomBoxProps } from "./CustomBox";
import happy from "../assets/happy.png";
import guy from "../assets/guy.png";
import web from "../assets/web.png";
import phone from "../assets/phone.png";
import strng from "../assets/strng.png";

const Section3 = () => {
  const header = {
    title: "Lorem Ipsum is simply dummy text of the printing. ",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  };
  const data: CustomBoxProps[] = [
    {
      left: {
        top: {
          icon: happy,
          iconbg: "#08D3BB",
          title: "Lorem Ipsum is simply dummy text",
          subtitle: "Lorem Ipsum is simply dummy text",
        },
        bottom: {
          title: "Lorem Ipsum is simply dummy text of the printing. ",
          subtitle:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
        },
      },
      rightImage: phone,
    },
    {
      left: {
        top: {
          icon: happy,
          iconbg: "#1090CB",
          title: "Lorem Ipsum is simply dummy text",
          subtitle: "Lorem Ipsum is simply dummy text",
        },
        bottom: {
          title: "Lorem Ipsum is simply dummy text of the printing. ",
          subtitle:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
        },
      },
      rightImage: web,
      isReverse: true,
    },
    {
      left: {
        top: {
          icon: happy,
          iconbg: "#9208D3",
          title: "Lorem Ipsum is simply dummy text",
          subtitle: "Lorem Ipsum is simply dummy text",
        },
        bottom: {
          title: "Lorem Ipsum is simply dummy text of the printing. ",
          subtitle:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
        },
      },
      rightImage: guy,
    },
  ];
  return (
    <Stack
      sx={{
        backgroundImage: `url(${strng})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundSize: "770px 910px",
        backgroundOrigin: "content-box",
        backgroundPositionY: "330px",
        backgroundPositionX: "40px",
      }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          padding: "64px 104px",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "33px",
            fontWeight: "600",
          }}
        >
          {header.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "text.secondary",
          }}
        >
          {header.subtitle}
        </Typography>
      </Stack>
      {data.map((item, index) => {
        return <CustomBox key={index} {...item} />;
      })}
    </Stack>
  );
};

export default Section3;
