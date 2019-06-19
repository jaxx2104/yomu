import { storiesOf } from "@storybook/vue"
import { withKnobs } from "@storybook/addon-knobs"

import Icon from "../components/Icon.vue"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Icon", () => {
    return {
      components: { Icon },
      template: `<Icon icon="search"/>`
    }
  })
