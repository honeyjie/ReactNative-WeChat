import { isImmutable } from 'immutable'

export const toJS = (obj) => {
  if(isImmutable(obj)) {
    return obj && obj.toJS()
  }

  return obj
}
