const pages = {
  "/company": {
    component: "Company",
  },
  "/team": {
    component: "Team",
  },
  "/features": {
    component: "Features",
    pageServerLoad: "/loading/features",
  },
};

export default pages;
