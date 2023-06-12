import * as React from "react";
import { ErrorLayout } from "./pages/Error";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public componentDidCatch(_error: Error): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  private resetState = async (): Promise<void> => {
    this.setState({ hasError: false });
  };

  public render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      <div>
        <ErrorLayout
          title={`Oops!`}
          desc={"Page not found."}
          btn={"Back to Home"}
          handleClick={this.resetState}
        />
      </div>;
    }

    return children;
  }
}

export default ErrorBoundary;
