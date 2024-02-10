import { useFirestore, } from 'vuefire'
import { collection, getDocs, query, where } from "firebase/firestore";
export default defineEventHandler(async (event) => {
  const db = useFirestore()
  let available = false
  let taken = false
  const { username } = await readBody(event)
  const usersRef = collection(db, "users");

  const { size } = await getDocs(query(usersRef, where("name", "==", username)));
  size ? taken = true : available = true

  return { available, taken }
})
