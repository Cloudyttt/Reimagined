import router from "./router";
import "nprogress/nprogress.css";
import { Route } from "vue-router";
import settings from "./settings";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start();
});

router.afterEach((to: Route) => {
  // Finish progress bar
  NProgress.done();
});
