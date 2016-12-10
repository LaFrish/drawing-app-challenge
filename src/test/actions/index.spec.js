import * as actions from '../actions/index'

describe('tool actions', () => {
  it('changeColor should create CHANGE_COLOR action', () => {
    expect(actions.changeColor('#eeeeee')).toEqual({
      type: 'CHANGE_COLOR',
      color: '#eeeeee'
    })
  })

  it('changeSize should create CHANGE_SIZE action', () => {
    expect(actions.changeSize('30')).toEqual({
      type: 'CHANGE_SIZE',
      size: '30'
    })
  })

})
