import type {ComponentSize, PixelUnit} from "@stable/shared";
import type {StyleValue, VNode} from "vue";

export type AnchorDireaction = "vertical" | "horizontal";

export interface AnchorProps {
  affix?: boolean;

  bounds?: PixelUnit;

  getContainer?: () => HTMLElement;

  getCurrentAnchor?: (activeLink: string) => string;

  offsetBottom?: PixelUnit;

  offsetTop?: PixelUnit;

  showInkInFixed?: boolean;

  targeOffset?: PixelUnit;

  wrapperClass?: string;

  wrapperStyle?: StyleValue;

  items?: AnchorItem[];

  direction?: AnchorDireaction;
}

export interface AnchorSlot {
  customTitle?: (option: AnchorItem) => unknown
}

export interface AnchorItem {
  key: string | number;

  href?: string;

  target?: string;

  title?: (item: AnchorItem) => VNode;

  children?: AnchorItem[];
}
