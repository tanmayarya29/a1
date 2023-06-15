import { Stack, Typography, Button } from "@mui/material";

export interface CustomCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  bgColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  icon?: string;
  textColor?: string;
}

const CustomCard = (props: CustomCardProps) => {
  const {
    title,
    subtitle,
    buttonText,
    bgColor,
    buttonBgColor,
    buttonTextColor,
    icon,
    textColor,
  } = props;
  return (
    <Stack
      sx={{
        width: "100%",
        padding: "64px",
        backgroundColor: bgColor,
        gap: "32px",
        borderRadius: "20px",
      }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* icon at top right fixed */}
      {icon && (
        <img
          src={icon}
          alt={title}
          style={{
            width: "30px",
            padding: "16px",
            backgroundColor: bgColor,
            borderRadius: "20px",
            position: "absolute",
            top: "16px",
            right: "16px",
          }}
        />
      )}
      <Typography
        sx={{
          fontWeight: "500",
          textTransform: "capitalize",
          fontSize: "20px",
          textAlign: "center",
          color: textColor,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: textColor || "text.secondary",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: buttonBgColor,
          color: buttonTextColor,
          width: "max-content",
          textTransform: "capitalize",
          ":hover": {
            backgroundColor: buttonBgColor,
          },
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

export default CustomCard;
