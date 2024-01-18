import type {ComponentSize} from "@stable/shared";
import type {Menu} from "@stable/menu"
import type {VNode} from "vue"

// TODO: 需要完善类型
export interface BreadcrumbItemRenderOption {
  route?: unkown;

  params?: unkown;

  routes?: unkown[];

  paths?: unkown[];
}

export interface BreadcrumbProps {
  itemRender?: (option: BreadcrumbItemRenderOption) => VNode;

  size?: ComponentSize;
}

export type BreadcrumbItemClickEvent = ($event: MouseEvent) => void;

export interface BreadcrumbItemProps {
  href?: string;

  overlay?: () => Menu;

  onClick?: BreadcrumbItemClickEvent;
}
