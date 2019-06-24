import { storiesOf } from "@storybook/vue"
import { withKnobs, text } from "@storybook/addon-knobs"

import Button from "../components/Button.tsx"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Button", () => {
    return {
      components: { Button },
      template: `<Button :label="label" />`,
      props: {
        label: {
          default: text("label", "label")
        }
      }
    }
  })
