import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import App from "./App";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** Redux appStore provider  */}
    <Provider store={appStore}>
      {/** React-Router appRouter provider  */}
      <RouterProvider router={appRouter} />
      {/** React-Router appRouter provider  */}
    </Provider>
    {/** Redux appStore provider  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
