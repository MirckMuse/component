import type { PixelUnit } from "@stable/shared";

export interface AffixProps {
  // 距离窗口底部达到偏移量后触发
  offsetBottom?: PixelUnit;

  // 距离窗口顶部达到偏移量后触发
  offsetTop?: PixelUnit;

  // 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
  target?: () => HTMLElement;

  // 固定状态改变时触发的回调函数
  onChange?: (affixed?: boolean) => void;
}   
