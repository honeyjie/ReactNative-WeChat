export const chooseChatFriends = (obj1, obj2) => {
  const result = {}

  for (key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      Object.assign(result, { [key]: Object.assign({}, obj2[key], obj1[key]) })
    }
  }

  return result
}
