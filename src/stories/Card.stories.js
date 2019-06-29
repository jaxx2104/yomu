import { storiesOf } from "@storybook/vue"
import { withKnobs, text } from "@storybook/addon-knobs"

import Card from "../components/Card.vue"
import image from "../../public/img/load.jpg"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Card", () => {
    return {
      components: { Card },
      template: `<Card :title="title" image="${image}"/>`,
      props: {
        title: {
          default: text("title", "title")
        }
      }
    }
  })
