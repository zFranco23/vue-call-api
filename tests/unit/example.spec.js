// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe( 'Test en Example Component' , () => {

  test('Debe de ser mayor a 10', () => {

    const value = 11;

    expect(value).toBeGreaterThan(10);
  })
  
})