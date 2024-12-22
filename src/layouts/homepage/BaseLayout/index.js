// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Kit
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import Breadcrumbs from "examples/Breadcrumbs";

import TestLogo from "assets/images/team-2.jpg";

// Routes
import routes from "routes";
import { Hidden } from "@mui/material";

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <MDBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <MDBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar routes={routes} transparent relative />
      </MDBox>
      <Container sx={{ mt: 6 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
          <MDBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
            {/* <Breadcrumbs routes={breadcrumb} /> */}
            <Hidden>
              <Breadcrumbs icon={TestLogo} title="Page Headers" route={breadcrumb} light={false} />
            </Hidden>
          </MDBox>
          <MDTypography variant="h3" mb={1}>
            {title}
          </MDTypography>
          {children}
        </Grid>
      </Container>
      <MDBox mt="auto">
        <CenteredFooter />
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
