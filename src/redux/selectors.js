
export const getTasksByCategory = (task_list, category) => {
  let list = task_list.filter( e => {
    return e.category == category
  })
  return list
}