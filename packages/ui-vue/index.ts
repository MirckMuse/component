import type { App } from "vue";
export * from "./components";
import * as components from "./components";


function install(app: App) {
  // 注册组件
  for (const key of Object.keys(components)) {
    const component = components[key];

    if (component.install) {
      app.use(component);
    } else {
      app.component(component.name, component);
    }
  }

  return app;
}

export default {
  install,
}