import { Component, PropsWithChildren } from "react";
import ErrorFallback from "shared/components/organisms/ErrorFallback";

type State = {
  hasError: boolean;
  error: Error | null;
};

type ErrorBoundaryProps = PropsWithChildren<{
  onUseMock?: () => void;
}>;

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  State
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { onUseMock } = this.props;

    if (hasError && error) {
      return (
        <ErrorFallback error={error} reset={this.reset} onUseMock={onUseMock} />
      );
    }

    return this.props.children;
  }
}
