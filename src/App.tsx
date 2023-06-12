import React, { useContext } from "react";
import "./app.css";
import { SplashScreen } from "./components/SplashScreen";
import { DialogContext } from "./contexts/dialog/DialogCtx";
import Dialog from "./components/common/Dialog/Dialog";
import Spinner from "./components/common/Spinner/Spinner";
const AppRoutes = React.lazy(() => import("./routers/routes"));

const App = () => {
  const opened = localStorage.getItem("intro-opened") === "opened";
  const { dialog } = useContext(DialogContext);

  if (opened) {
    return (
      <React.Suspense fallback={<Spinner />}>
        {dialog.bool && <Dialog />}
        <div className="app">
          <AppRoutes />
        </div>
      </React.Suspense>
    );
  }
  return <SplashScreen />;
};

export default App;
