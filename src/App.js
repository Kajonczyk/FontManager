import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import { Header } from "./Components/Header/Header";
import { Input } from "./Components/Search/Input";
import { Results } from "./Components/Results/Results";
import GlobalStyle from "./Utils/GlobalStyle";
import { QueryProvider } from "./Shared/QueryContext";
function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryProvider>
          <Header />
          <Input />
          <Results />
        </QueryProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
