import type { Component, Plugin } from "vue";

// TODO: 类型需要完善
export type StableComponent = Component & {
  install?: Plugin
}

// 所有组件共有的尺寸
export type ComponentSize = "small" | "middle" | "large"
