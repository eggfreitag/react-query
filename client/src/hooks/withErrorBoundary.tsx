import React, { Component } from "react";
import { View, Text } from "react-native";

type State = {
  hasError: boolean;
  errorMessage: string;
};

const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  class ErrorBoundary extends Component<P, State> {
    state: State = { hasError: false, errorMessage: "" };

    componentDidCatch(error: Error) {
      this.setState({ hasError: true });
      this.setState({ errorMessage: error.message });
    }

    render() {
      if (!this.state.hasError) {
        return <WrappedComponent {...(this.props as P)} />;
      }

      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{this.state.errorMessage}</Text>
        </View>
      );
    }
  }

  return ErrorBoundary;
};

export default withErrorBoundary;
