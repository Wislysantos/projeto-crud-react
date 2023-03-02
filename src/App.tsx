import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { AppThemeContext } from "./shared/context";

export const App = () => {
  return (
    <AppThemeContext>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppThemeContext>
  );
};
