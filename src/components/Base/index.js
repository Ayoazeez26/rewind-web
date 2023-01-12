// import { App } from "vue";
const components = import.meta.glob("./*.vue");

export const registerComponents = async (app) => {
  for (const component in components) {
    const mod = await components[component]();
    const { name } = mod.default;
    app.component(name, mod.default);
  }
  return Promise.resolve("Completed");
};
