import React from "react";
import PageLayout from "./components/layouts/PageLayout/PageLayout";
import Views from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <PageLayout size="xl">
        <Views />
      </PageLayout>
    </div>
  );
}

export default App;
