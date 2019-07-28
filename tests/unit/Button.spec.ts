import { shallowMount } from "@vue/test-utils"

import Button from "../../src/components/Button.vue"

const label = "label"
const wrapper = shallowMount(Button, {
  propsData: { label }
})

test("Button", () => {
  expect(wrapper.props().label).toBe(label)
})

test("Button Spapshot", () => {
  expect(wrapper).toMatchInlineSnapshot(`
<button class="">
  label
</button>
`)
})
