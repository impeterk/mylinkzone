



export default defineEventHandler(async (event) => {
  const {username} = await readBody(event)
  const todos = useCollection(collection(db, 'users'))
  console.log(todos)
  return 'Hello users/getuser'
})
