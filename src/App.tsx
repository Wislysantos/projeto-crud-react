import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeContext, DrawerProvider } from "./shared/context";

export const App = () => {
  return (
    <AppThemeContext>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRouter />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeContext>
  );
};
