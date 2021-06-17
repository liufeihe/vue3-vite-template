import { shallowMount } from '@vue/test-utils'
import CounterBtn from '../CounterBtn.vue'

describe('CounterBtn.vue', () => {
  test('button click', async () => {
    let msg = 'count is: 0'
    const wrapper = shallowMount(CounterBtn)
    expect(wrapper.text()).toMatch(msg)
    
    await wrapper.find('button').trigger('click')
    msg = 'count is: 1'
    expect(wrapper.text()).toMatch(msg)
  })
})
