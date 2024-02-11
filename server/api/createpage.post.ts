import { useFirestore } from 'vuefire'
import { doc, setDoc } from "firebase/firestore";


export default defineEventHandler(async(event) => {
  const db = useFirestore()
  const {user, name} = await readBody(event)
  await setDoc(doc(db, 'pages', user.uid), {
    name,
    createdAt: user.createdAt,
    userImg: user?.photoURL 
  })
  return 'User page created'
})
