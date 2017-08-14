const immutable = require('immutable')
const fromJS = immutable.fromJS

const state = fromJS({
  contacts: []
})

const state1 = state.setIn(['contacts'], {id: 1})

const state2 = state.updateIn(['contacts'], (value) => value.filter((i, el)=> el.id !== 1 ))


