import { Component } from "react";
import Hero from "./Hero";
import ErrorBoundary from "./errorBoundary";
class ParentErrorBoundary extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ParentErrorBoundary;
