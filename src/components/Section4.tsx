import { Stack } from "@mui/material";
import CustomCard from "./CustomCard";

const Section4 = () => {
  const data = [
    {
      title: "Lorem Ipsum is simply dummy text",
      subtitle:
        "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      buttonText: "View More",
    },
    {
      title: "Lorem Ipsum is simply dummy text",
      subtitle:
        "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ",
      buttonText: "View More",
    },
  ];
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      sx={{
        padding: "64px",
      }}
    >
      <CustomCard
        title={data[0].title}
        subtitle={data[0].subtitle}
        buttonText={data[0].buttonText}
        bgColor="#f4f4f4"
        buttonBgColor="primary.main"
        buttonTextColor="#fff"
      />
      <CustomCard
        title={data[1].title}
        subtitle={data[1].subtitle}
        buttonText={data[1].buttonText}
        bgColor="primary.main"
        textColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="primary.main"
      />
    </Stack>
  );
};

export default Section4;
