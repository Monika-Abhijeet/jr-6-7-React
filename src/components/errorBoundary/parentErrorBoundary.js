import { Component } from "react";
import Hero from "./Hero";
import ErrorBoundary from "./errorBoundary";
import Counter from "./counter";
class ParentErrorBoundary extends Component {
  render() {
    return (
      <div>
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ParentErrorBoundary;
