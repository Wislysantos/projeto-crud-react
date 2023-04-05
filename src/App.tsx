import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeContext } from "./shared/context";

export const App = () => {
  return (
    <AppThemeContext>
      <BrowserRouter>
        <MenuLateral>
          <AppRouter />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeContext>
  );
};
