import { shallowMount } from "@vue/test-utils"
import Icon from "./Icon.vue"

const title = "title"
const wrapper = shallowMount(Icon, {
  propsData: { title }
})

test("Icon", () => {
  expect(wrapper.vm.title).toBe(title)
})

test("Icon Spapshot", () => {
  expect(wrapper).toMatchInlineSnapshot(`
<div class="icon" title="title">
  <img src="/icons/.svg">
</div>
`)
})
