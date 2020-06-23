import React from 'react'
import { mount } from 'enzyme'
import Button from '../src/Button'
import Windmill from '../src/Windmill'

describe('Windmill Context', () => {
  it('should use defaultTheme styles', () => {
    const expected =
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'
    const wrapper = mount(
      <Windmill>
        <Button />
      </Windmill>
    )

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should extend theme', () => {
    const expected = 'bg-red-600'
    const theme = {
      'button-base': 'bg-red-600',
    }
    const wrapper = mount(
      <Windmill theme={theme}>
        <Button />
      </Windmill>
    )

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected)
  })
})