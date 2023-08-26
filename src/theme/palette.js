import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
  1000: "rgb(145 158 171 / 32%)",
  2000: "rgb(0, 0, 0, 0.6)",
  3000: "rgb(0, 0, 0, 0.3)",
};

const PRIMARY = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#A8CF45",
  darker: "#4cbb17",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#ec7a47",
  light: "#FFA48D",
  main: "#EE353F",
  dark: "#F47D49",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const palette = {
  common: {
    black: "#221E20",
    white: "#fff",
    blue: "#283c92",
    greyBox: "#d3d9df",
    red: "#EE2031",
  },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: "#fff", default: GREY[0], neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  skyBlue: "rgb(85 198 217)",
  navyBlue: "#283C92",
  ocrCardBg: "rgba(40, 60, 146, 0.08)",
  ocrImgColor: "rgba(0, 0, 0, 0.26)",
  greyBlue: "#A0A1A9",
  ocrButtonShadow:
    "0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
  accordionBg: "#dfe2ef",
  activeSwitchThumb: "#1976D2",
  activeSwitchTrack: "rgba(25, 118, 210, 0.2)",
  inActiveSwitchTrack: "rgba(0, 0, 0, 0.38)",
  offWhite: "#F5F5F5",
  progressTrackColor: "#0DD25C1F",
  greyBorder: "#e0e0e0",
  greyishColor: "#f0f1f7",
  dropdownShadow: "-1px 0px 4px 3px rgb(0 0 0 / 12%)",
  dropdownHr: "rgba(255, 255, 255, 0.12)",
  progressBarbg: "rgba(76, 187, 23, 0.12)",
  inputError: "#FF4842",
  inputLabel: "#5E6368",
  checkCircleBg: "#3bb54a",
  checkCircleIcon: "#d4e1f4",
};

export default palette;
