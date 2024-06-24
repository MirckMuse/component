import { patchInstall } from "../../shared";

import Checkbox from "./Checkbox.vue";
import Group from "./Group.vue";

export const SCheckbox = patchInstall(Checkbox, { Group });
