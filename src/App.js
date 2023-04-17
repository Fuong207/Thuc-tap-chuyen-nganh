import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTER } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {APP_ROUTER.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
