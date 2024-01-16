import type { App } from "vue";
import type { StableComponent } from "./typing";

// 给组件打 install 补丁。
export function patchInstall<E extends Record<string, StableComponent>>(component: StableComponent, extra?: E) {
  component.install = component.install || ((app: App) => {
    for (const comp of [component, ...Object.values(extra ?? {})]) {
      if (comp.name) {
        app.component(comp.name, comp)
      }
    }

    return app;
  });

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      (component as any)[key] = comp
    }
  }


  return component as StableComponent & E;
}