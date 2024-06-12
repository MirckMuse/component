import {patchInstall} from "@stable/shared";

import Badge from "./Badge.vue"
import Ribbon from "./Ribbon.vue"

export const SBadge = patchInstall(Badge, {
  Ribbon
})
