
export interface CarouselProps {
  autoplay?: boolean;

  dotPosition?: CarouselDotPosition;

  dots?: boolean;

  dotsClass?: string;

  easing?: string;

  effect?: CarouselEffect;

  afterChange?: (current: number) => void;

  beforeChange?: (from: number, to: number) => void;
}

export type CarouselDotPosition = 'top' | 'bottom' | 'left' | 'right';

export type CarouselEffect = "scrollx" | "fade";
