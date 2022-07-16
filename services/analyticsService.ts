import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export const logSubs = (email: string) => {
  logEvent(analytics, 'subscription', {
    email
  })
}