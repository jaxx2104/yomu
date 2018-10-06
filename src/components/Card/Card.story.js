import { storiesOf } from "@storybook/vue"
import { withKnobs, text } from "@storybook/addon-knobs"
import Card from "./Card.vue"
import store from "../../store"
import image from "../../static/load.jpg"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Card", () => {
    const title = text("title", "title")
    return {
      store,
      components: { Card },
      template: `<Card title="${title}" image="${image}"/>`
    }
  })
