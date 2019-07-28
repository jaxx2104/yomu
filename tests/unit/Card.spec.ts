import { shallowMount } from "@vue/test-utils"

import Card from "../../src/components/Card.vue"
import "../../src/helpers/vue-lazyload"

const title = "title"
const wrapper = shallowMount(Card, {
  propsData: { title }
})

test("Card", () => {
  expect(wrapper.props().title).toBe(title)
})

test("Card Spapshot", () => {
  expect(wrapper).toMatchInlineSnapshot(`
<div class="card-tile">
  <div class="card-image" data-src="/img/load.jpg" style="background-image: url(/img/load.jpg);" lazy="loading">
    <h2 class="card-title">
      title
    </h2>
  </div>
</div>
`)
})
