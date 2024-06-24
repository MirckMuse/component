import { patchInstall } from "../../shared";

import Breadcrumb from "./Breadcrumb.vue";
import BreadcrumbItem from "./Item.vue";
import BreadcrumbSeparator from "./Separator.vue";

export const SBreadcrumb = patchInstall(Breadcrumb, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});
