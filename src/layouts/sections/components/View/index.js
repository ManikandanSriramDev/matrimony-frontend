import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";

// Material Kit
import MDBox from "components/MDBox";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Kit
import colors from "assets/theme/base/colors";

function View({ children, code, title, height, ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MDBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <MDBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
            <MDTypography variant="body1" pt={0.5}>
              {title}
            </MDTypography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MDBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-desktop"
                    />
                  }
                  label="Preview"
                />
                <Tab
                  icon={
                    <MDBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-code"
                    />
                  }
                  label="Code"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox display={activeTab === 0 ? "block" : "none"}>
        <MDBox width="100%" p={3}>
          <MDBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            {children}
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox display={activeTab === 1 ? "block" : "none"} p={3}>
        <MDBox
          bgColor="grey-100"
          position="relative"
          width="100%"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
          <CopyToClipboard text={code}>
            <MDButton
              variant="gradient"
              color="dark"
              size="small"
              sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              onClick={() => setSuccess(true)}
            >
              <MDBox color="white" mr={0.5} className="fas fa-copy" /> Copy
            </MDButton>
          </CopyToClipboard>
          <Slide direction="down" in={success} unmountOnExit>
            <MDBox position="absolute" top="0.5rem" left={0} width="100%">
              <MDAlert
                width="25%"
                mx="auto"
                color="success"
                sx={{ minHeight: "2.5rem !important", py: 1, justifyContent: "center" }}
              >
                <MDTypography variant="body2" color="white" fontWeight="regular">
                  Code successfully copied!
                </MDTypography>
              </MDAlert>
            </MDBox>
          </Slide>
          <SyntaxHighlighter
            language="jsx"
            style={prism}
            showLineNumbers
            customStyle={{
              height,
              maxHeight: "40rem",
              fontSize: "1rem",
              backgroundColor: grey[100],
              padding: "1rem 1rem 1rem 0.25rem",
              overflowY: "scroll",
              margin: 0,
            }}
          >
            {code}
          </SyntaxHighlighter>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default View;
