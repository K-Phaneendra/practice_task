
import { Route, Navigate, Routes, useLocation } from "react-router-dom";

import paths from './paths.json';

import Home from '../screens/Home';
import PageSummary from "../screens/PageSummary";

export default function Router() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route
        exact
        path={paths.home}
        element={<Home />}
      />
      <Route
        exact
        path={`${paths.pageSummaryById}/:id`}
        element={<PageSummary />}
      />
      {/* if no path found, then redirect to "/" */}
      {/* <Route path="*" element={<Navigate to ="/" />}/> */}
    </Routes>
  )
};
