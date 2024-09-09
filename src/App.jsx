import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { apiRefreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { Layout } from "./Layout";

// import ContactsPage from "./pages/ContactsPage/ContactsPage";
// import HomePage from "./pages/HomePage/HomePage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(apiRefreshUser);
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
