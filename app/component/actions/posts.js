import { createAction } from 'redux-actions'
import faker from 'faker'

export const FETCH_MOMENTS = 'APP/FETCH_MOMENTS'
export const fetch_moments = createAction(FETCH_MOMENTS, () => {
  const pictures = new Array(Math.random())
  return
  [
    {
      id: 0,
      message: faker.lorem.sentence(),
      pictures: [],
      address: '',
      time: '',
      comments: [{time, message, ref:id}],
      like: [0,1]
    },
  ]
})
