import { shallowMount } from "@vue/test-utils"
import Icon from "../../src/components/Icon.vue"

import "../../src/helpers/vue-fontawesome"

const icon = "search"
const wrapper = shallowMount(Icon, {
  propsData: { icon }
})

test("Icon Spapshot", () => {
  expect(wrapper).toMatchInlineSnapshot(`
<div class="icon">
  <font-awesome-icon-stub icon="search"></font-awesome-icon-stub>
</div>
`)
})
