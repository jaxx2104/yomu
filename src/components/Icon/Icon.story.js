import { storiesOf } from "@storybook/vue"
import { withKnobs, text } from "@storybook/addon-knobs"
import Icon from "./Icon.vue"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Icon", () => {
    const title = text("title", "title")
    return {
      components: { Icon },
      template: `<Icon icon="search"/>`
    }
  })
