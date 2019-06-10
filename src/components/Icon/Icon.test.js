import { shallowMount } from "@vue/test-utils"
import Icon from "./Icon.vue"

const icon = "search"
const wrapper = shallowMount(Icon, {
  propsData: { icon }
})

test("Icon Spapshot", () => {
  expect(wrapper).toMatchInlineSnapshot(`
<div class="icon">
  <font-awesome-icon icon="search" style="color: rgb(233, 30, 99);"></font-awesome-icon>
</div>
`)
})
