import { Stack, Typography } from "@mui/material";

export interface CustomBoxProps {
  left: {
    top: {
      icon: string;
      iconbg: string;
      title: string;
      subtitle: string;
    };
    bottom: {
      title: string;
      subtitle: string;
    };
  };
  rightImage: string;
  isMiddleDivider?: boolean;
  isReverse?: boolean;
}

const CustomBox = (props: CustomBoxProps) => {
  const { left, rightImage, isMiddleDivider, isReverse } = props;
  const { top, bottom } = left;
  const { icon, iconbg } = top;
  const { title, subtitle } = bottom;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isReverse ? "row-reverse" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "32px 96px",
        gap: "32px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "16px",
          borderRight: isMiddleDivider ? "1px solid #C4C4C4" : "",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: "100%",
          }}
        >
          <img
            src={icon}
            alt={title}
            style={{
              width: "20px",
              padding: "16px",
              backgroundColor: iconbg,
              borderRadius: "50%",
            }}
          />
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            padding={"16px"}
          >
            <Typography
              sx={{
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {top.title}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "10px",
              }}
            >
              {top.subtitle}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          sx={{
            textAlign: "left",
            width: "300px",
          }}
        >
          <h3
            style={{
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            {title.split(" ").map((word, index) => {
              if (index < 2) {
                return (
                  <span
                    key={word}
                    style={{
                      color: "#1090CB",
                    }}
                  >
                    {word}{" "}
                  </span>
                );
              } else {
                return (
                  <span
                    key={word}
                    style={{
                      color: "#252525",
                    }}
                  >
                    {word}{" "}
                  </span>
                );
              }
            })}
          </h3>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </div>
      <div
        style={{
          height: "100%",
          width: "50%",
        }}
      >
        <img
          src={rightImage}
          alt={title}
          style={{
            width: "500px",
          }}
        />
      </div>
    </div>
  );
};

export default CustomBox;
