export const formatPost = (post) => {
  const regex = /^(.+)?\r\n\s*(.+)?\r\n/
  const { body } = post
  const result = regex.exec(body)
  return {
    id: post.id,
    title: post.title,
    description: result[1],
    comments: post.comments
  }
}
