import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/users/UserCtx";
import reportWebVitals from "./reportWebVitals";
import DEFAULT_THEME from "./themes/theme";
import LocationPermissionProvider from "./contexts/location/permissionCtx";
import DialogProvider from "./contexts/dialog/DialogCtx";
import NavigationProvider from "./contexts/navigation/navigationCtx";
import BuyingStatusProvider from "./contexts/buyingStatus/buyingStatusCtx";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={{ DEFAULT_THEME }}>
        <AuthProvider>
          <LocationPermissionProvider>
            <NavigationProvider>
              <BuyingStatusProvider>
                <DialogProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </DialogProvider>
              </BuyingStatusProvider>
            </NavigationProvider>
          </LocationPermissionProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
