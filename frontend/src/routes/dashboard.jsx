import SelectCat from "views/SelectCat.jsx";
import Results from "views/Results.jsx";

const dashboardRoutes = [
  {
    path: "/vote",
    name: "Vote",
    icon: "pe-7s-check",
    component: SelectCat
  },
  {
    path: "/results",
    name: "Results",
    icon: "pe-7s-graph1",
    component: Results
  },
  { redirect: true, path: "/", to: "/vote", name: "Vote" }
]

export default dashboardRoutes;
