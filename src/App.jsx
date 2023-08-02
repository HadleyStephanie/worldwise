import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

// BEFORE LAZY LOADING
// dist/assets/index-3963a08d.css   30.14 kB │ gzip:   5.06 kB
// dist/assets/index-be2e9eaf.js   524.83 kB │ gzip: 148.76 kB

// AFTER LAZY LOADING
// dist/index.html                           0.48 kB │ gzip:   0.32 kB
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/Homepage-380f4eeb.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/AppLayout-b9f1b3f4.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-66f6575d.css           26.47 kB │ gzip:   4.35 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-629b07db.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-fa15134b.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-f226fbd5.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-63687ca2.js           0.65 kB │ gzip:   0.42 kB
// dist/assets/Homepage-b59203c4.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-9d6a9776.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-54482464.js             1.02 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-6ddcc3d4.js       156.97 kB │ gzip:  46.15 kB
// dist/assets/index-07399347.js           366.25 kB │ gzip: 102.16 kB
