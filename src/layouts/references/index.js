import { Container, Grid, Paper, Typography } from "@mui/material";

import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import TypographyEl from "layouts/sections/elements/typography";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";

const DeveloperPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Developer Components Playground
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Avatars
            </Typography>
            <Avatars />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Badges
            </Typography>
            <Badges />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Breadcrumbs
            </Typography>
            <BreadcrumbsEl />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Buttons
            </Typography>
            <Buttons />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Dropdowns
            </Typography>
            <Dropdowns />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Progress Bars
            </Typography>
            <ProgressBars />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Toggles
            </Typography>
            <Toggles />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Typography
            </Typography>
            <TypographyEl />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Alerts
            </Typography>
            <Alerts />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Modals
            </Typography>
            <Modals />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Tooltips & Popovers
            </Typography>
            <TooltipsPopovers />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeveloperPage;
