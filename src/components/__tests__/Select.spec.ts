import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import { nextTick } from '@vue/runtime-core'
import Select from '../Select.vue'

const fileName = 'ant'

describe('select', () => {
  test('base click', async () => {
    // const handleClick = jest.fn()
    const wrapper = mount(Select)

    await wrapper.find(`.${fileName}-select`).trigger('click')
    // await nextTick()
    // await flushPromises()
    expect(wrapper.find(`.${fileName}-select`).classes()).toContain(`${fileName}-select-open`)
  })
})