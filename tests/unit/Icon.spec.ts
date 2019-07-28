import { shallowMount } from "@vue/test-utils"

import "../../src/helpers/vue-lazyload"
import "../../src/helpers/vue-fontawesome"
import Icon from "../../src/components/Icon.vue"

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
