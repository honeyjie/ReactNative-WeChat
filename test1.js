// import { fromJS } from 'immutable'

const obj1 = {
  1: {
    name: 'Lime1',
    avatar: 'haha1',
  },
  2: {
    name: 'Lime2',
    avatar: 'haha2',
  },
  3: {
    name: 'Lime3',
    avatar: 'haha3',
  },
}

const obj2 = {
  1: {
    time: 11,
    messages: ['message1'],
  },
  2: {
    time: 12,
    messages: ['message2'],
  },
}

const result = {}

for (key in obj2) {
  if (obj2.hasOwnProperty(key)) {
    Object.assign(result, { [key]: Object.assign({}, obj2[key], obj1[key]) })
  }
}

console.log(result)
console.log(Object.keys(result))
// console.log((Object.keys(result)[0]))
console.log(Math.min(null, Object.keys(result)))
