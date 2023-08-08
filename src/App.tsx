import React, { useEffect, useState } from "react";
import PageLayout from "./components/layouts/PageLayout/PageLayout";
import Views from "./routes/Routes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [layoutSize, setLayoutSize] = useState<"sm" | "md" | "lg" | "xl">("xl");
  useEffect(() => {
    const path = location.pathname;
    if (path === "/login" || path === "/sign-up") {
      setLayoutSize("lg");
    } else {
      setLayoutSize("xl");
    }
    return () => {};
  }, [location]);

  return (
    <div className="App">
      <PageLayout size={layoutSize}>
        <Views />
      </PageLayout>
    </div>
  );
}

export default App;
