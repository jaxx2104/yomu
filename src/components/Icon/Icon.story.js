import { storiesOf } from "@storybook/vue"
import { withKnobs } from "@storybook/addon-knobs"
import Icon from "./Icon.vue"

storiesOf("atoms", module)
  .addDecorator(withKnobs)
  .add("Icon", () => {
    return {
      components: { Icon },
      template: `
      <div>
        <Icon icon="cancel"/>
        <Icon icon="search"/>
        <Icon icon="share"/>
        <Icon icon="toggle"/>
      </div>`
    }
  })
