import Counter from "./counter";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./fallback";
import Hero from "./Hero";
function ErrorParent() {
  let errorHandler = (error, info) => {
    console.log(error, info);
  };
  return (
    <div>
      <h1>Error boundary using react-error-boundary library</h1>
      <ErrorBoundary FallbackComponent={Fallback} onerror={errorHandler}>
        <Counter />
        {/* <Hero heroName="Joker" /> */}
      </ErrorBoundary>
    </div>
  );
}

export default ErrorParent;


