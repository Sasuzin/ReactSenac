import { Routes, Route } from "react-router";
import ThemeProvider from "./ThemeProvider";
import Home from "./Home";
import NotFound from "./NotFound";
import Abount from "./Abont";

function App() {
  return(
    <ThemeProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="abont" element={<Abount />} />
          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
      </ThemeProvider>
  );
}

export default App;
