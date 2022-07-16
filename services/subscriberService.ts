import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addSubscriber = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "subscribers"), {
      email
    });
    return { message: "Successfully subscribed to our newsletter" };

  } catch (e: any) {
    return { message: e.message };
  }

}