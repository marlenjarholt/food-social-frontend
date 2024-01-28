import type { Component } from "solid-js";

import styles from "./App.module.scss";
import { StyledEngineProvider } from "@suid/material";
import UserPage from "./pages/UserPage/UserPage";

const App: Component = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div class={styles.appPadding}>
        <UserPage />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
