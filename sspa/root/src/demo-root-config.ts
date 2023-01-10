import { registerApplication, start } from "single-spa";
import type { LifeCycles } from "single-spa";

registerApplication({
  name: "@tuco/homePage",
  app: () => System.import<LifeCycles>("@tuco/homePage"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
