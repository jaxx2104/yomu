import { shallowMount } from "@vue/test-utils"
import Button from "./Button.vue"

const label = "label"
const wrapper = shallowMount(Button, {
  propsData: { label }
})

test("Button", () => {
  expect(wrapper).toBe(label)
})

test("Button Spapshot", () => {
  expect(wrapper).toMatchInlineSnapshot(`
<button class="">
  label
</button>
`)
})
