import React, { Suspense, memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThemeProvider from "./theme";
import Router from "./router";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const RoutesWithSuspense = memo(() => {
  const showLoader = true;
  return (
    <Suspense fallback={showLoader ? "" : ""}>
      <Router />
    </Suspense>
  );
});

export default App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <RoutesWithSuspense />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
