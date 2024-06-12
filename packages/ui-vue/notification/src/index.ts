import { patchInstall } from "@stable/shared";

import Notification from "./Notification.vue"

export const SNotification = patchInstall(Notification, {})
    