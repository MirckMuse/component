import type { Component, Plugin } from "vue";

// TODO: 类型需要完善
export type StableComponent = Component & {
  install: Plugin
}
