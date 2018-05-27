import { shallowMount } from "@vue/test-utils"
import test from "ava"
import Button from "./Button.vue"

test("Button1", t => {
  const label = "label"
  const wrapper = shallowMount(Button, {
    propsData: { label }
  })
  t.is(wrapper.vm.label, label)
})
