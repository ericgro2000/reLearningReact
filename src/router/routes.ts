
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import ErrorPage from "../pages/ErrorPage";

interface Route {
  path: string;
  component: React.ComponentType;
}

export const privateRoutes: Route[] = [
  { path: "/", component: About},
  { path: '/posts', component: Posts},
  { path: '/posts/:id', component: PostIdPage },
  { path: '/about', component: About  },
  { path: '*', component: ErrorPage  },
];