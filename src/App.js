import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Todo from "./components/Todo/Todo";
import Blog from "./components/Blog/Blog";
import RootLayout from "./components/RootLayout/RootLayout";
import Logbook from "./components/Logbook/Logbook";
import BlogPostPage from "./components/Blog/BlogPostPage";
import NewBlogPostPage from "./components/Blog/NewBlogPostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:postId", element: <BlogPostPage /> },
      { path: "/todo", element: <Todo /> },
      { path: "/logbook", element: <Logbook /> },
      { path: "/blog/new", element: <NewBlogPostPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
