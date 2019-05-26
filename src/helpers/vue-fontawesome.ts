import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAlignJustify,
  faSearch,
  faShareSquare,
  faTimes,
  faTimesCircle,
  faToggleOff
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(
  faAlignJustify,
  faSearch,
  faShareSquare,
  faTimes,
  faTimesCircle,
  faToggleOff
)

Vue.component("font-awesome-icon", FontAwesomeIcon)
