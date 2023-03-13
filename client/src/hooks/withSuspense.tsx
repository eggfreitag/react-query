import { ComponentType, Suspense } from "react";

import Loading from "../components/Loading";

const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithSuspense = (props: P) => {
    return (
      <Suspense fallback={<Loading />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  return WithSuspense;
};

export default withSuspense;
