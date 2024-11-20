import DrowerProvider from "./Context/open-context";
import { Router } from "./Router/router";

function App() {
  return (
    <DrowerProvider>
      <Router />
    </DrowerProvider>
  );
}

export default App;
