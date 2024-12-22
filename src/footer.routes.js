// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit
import MDTypography from "components/MDTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();
const companyName = "Company Name";

export default {
  brand: {
    name: "Find Your Perfect Match!",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "about-us" }],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "" },
        { name: "affiliate program", href: "" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "" },
        { name: "knowledge center", href: "" },
        { name: "custom development", href: "" },
        { name: "sponsorships", href: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "" },
        { name: "privacy policy", href: "" },
        { name: "licenses (EULA)", href: "" },
      ],
    },
  ],
  copyright: (
    <MDTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {companyName} by{" "}
      <MDTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Powered by {}
      </MDTypography>
      .
    </MDTypography>
  ),
};
