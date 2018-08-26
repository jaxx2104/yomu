import { storiesOf } from "@storybook/vue"
import { withKnobs, text } from "@storybook/addon-knobs"
import Button from "./Button.vue"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const label = text("label", "label")
    return {
      components: { Button },
      template: `<Button label="${label}" />`
    }
  })
