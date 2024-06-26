import { patchInstall } from "../../shared";

import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";

export const SButton = patchInstall(Button, {
  ButtonGroup,
});
