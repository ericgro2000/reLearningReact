
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";

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

export const publicRoutes = [
  { path: "/", component: Login},
  {path: '/login', component: Login},
  { path: '*', component: Login  },
]