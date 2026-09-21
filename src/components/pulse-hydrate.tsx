import { useEffect } from "react";
import { markPulseHydrated, usePulse } from "@/store/pulse";

export function PulseHydrate() {
  useEffect(() => {
    void usePulse.persist.rehydrate();
    markPulseHydrated();
  }, []);
  return null;
}
