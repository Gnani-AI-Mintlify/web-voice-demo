import { useCallback, useState } from "react";

import { DemoInProgress } from "./DemoInProgress";
import { ReadyState } from "./ReadyState";

export const DemoSection = () => {
  const [demoInProgress, setDemoInProgress] = useState(false);

  const handleStartDemo = useCallback(() => {
    setDemoInProgress(true);
  }, [setDemoInProgress]);

  const handleEndDemo = useCallback(() => {
    setDemoInProgress(false);
  }, [setDemoInProgress]);

  return (
    <>
      {demoInProgress ? (
        <DemoInProgress onDemoEnd={handleEndDemo} />
      ) : (
        <ReadyState onStart={handleStartDemo} />
      )}
    </>
  );
};
