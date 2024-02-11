import { useFirestore, } from 'vuefire'
import { collection, getDocs, query, where } from "firebase/firestore";

const forbiddenUsers = ['dashboard', 'create', 'login']
// TODO: zod for username validation (alphanumeric characters, email, must start with letter )

export default defineEventHandler(async (event) => {
  let { username } = await readBody(event)
  username = username.trim()
  if (forbiddenUsers.includes(username) || username.includes('/')) {
    return {available: false, taken: true}
  }

  const db = useFirestore()
  let available = false
  let taken = false
  const usersRef = collection(db, "pages");

  const { size } = await getDocs(query(usersRef, where("name", "==", username)));
  size ? taken = true : available = true

  return { available, taken }
})
