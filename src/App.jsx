import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// Pages Imports
import Home from "./pages/Home";

// Error Boundary
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<div>App crashed. Try again later.</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
