import React, { Component } from "react";

import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Types from https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/#options-2-writing-your-custom-error-boundary-component
 * */
export default class SafeComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong.</h1>
    ) : (
      this.props.children
    );
  }
}
