import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { logSubs } from "./analyticsService";

export const addSubscriber = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "subscribers"), {
      email
    });
    logSubs(email)
    return { message: "Successfully subscribed to our newsletter" };

  } catch (e: any) {
    return { message: e.message };
  }

}