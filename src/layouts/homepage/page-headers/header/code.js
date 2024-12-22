/* eslint-disable no-template-curly-in-string */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Images
import bgImageUrl from "assets/images/bg-coworking.jpeg";

// Define rgba function
const rgba = (color, alpha) => {
  const [r, g, b] = color.match(/\d+/g); // Assumes color is in rgb format
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Define linearGradient function
const linearGradient = (start, end) => {
  return `linear-gradient(${start}, ${end})`;
};

const bgImage = `${linearGradient(
  rgba("rgb(0, 0, 0)", 0.5),
  rgba("rgb(255, 255, 255)", 0.5)
)}, url(${bgImageUrl})`;

function HeaderCode() {
  return (
    <MDBox component="header" position="relative">
      <MDBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MDTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Material Design
            </MDTypography>
            <MDButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <MDBox component="i" color="white" className="fas fa-bars" />
            </MDButton>
            <MDBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <MDBox component="li">
                <MDTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </MDTypography>
              </MDBox>
              <MDBox component="li">
                <MDTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </MDTypography>
              </MDBox>
              <MDBox component="li">
                <MDTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <MDBox component="li">
                <MDTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MDBox component="i" color="white" className="fab fa-twitter" />
                </MDTypography>
              </MDBox>
              <MDBox component="li">
                <MDTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MDBox component="i" color="white" className="fab fa-facebook" />
                </MDTypography>
              </MDBox>
              <MDBox component="li">
                <MDTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MDBox component="i" color="white" className="fab fa-instagram" />
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
        </Container>
      </MDBox>
      <MDBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={({ palette: { gradients }, functions: { linearGradient, rgba } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.dark.main, 0.5),
            rgba(gradients.dark.state, 0.5)
          )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MDTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Material Kit
            </MDTypography>
            <MDTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </MDTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MDButton color="white">Get Started</MDButton>
              <MDButton variant="text" color="white">
                Read more
              </MDButton>
            </Stack>
          </Grid>
        </Container>
      </MDBox>
    </MDBox>
  );
}

export default HeaderCode;
