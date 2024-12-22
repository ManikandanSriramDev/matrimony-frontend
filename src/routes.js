import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import HomePage from "layouts/homepage";
import DeveloperPage from "layouts/references";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";

// @mui iconss
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/",
    component: <HomePage />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">code</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-un",
    icon: <Icon fontSize="small">register</Icon>,
    route: "/authentication/sign-in",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "About Us",
    key: "about-us",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    type: "collapse",
    name: "Contact Us",
    key: "contact-us",
    icon: <Icon fontSize="small">contact_mail</Icon>,
    route: "/contact-us",
    component: <ContactUs />,
  },
  {
    type: "collapse",
    name: "Author",
    key: "author",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/author",
    component: <Author />,
  },
  {
    type: "collapse",
    name: "Developer Page",
    key: "developer-page",
    icon: <Icon fontSize="small">code</Icon>,
    route: "/developer-page",
    component: <DeveloperPage />,
  },
];

export default routes;
