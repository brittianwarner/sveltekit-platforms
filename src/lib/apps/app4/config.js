const pages = {
  "/about": {
    component: "About",
  },
  "/team": {
    component: "Team",
  },
  "/features": {
    component: "Products",
    pageServerLoad: "/loading/products",
  },
  "/contact-us": {
    component: "ContactUs",
  },
};

export default pages;
