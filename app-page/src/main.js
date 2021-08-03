import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import router from "./router";

import App from "./App.vue";

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render(h) {
      return h(App, {
        props: {
          getNewsList: this.getNewsList
        },
      });
    },
  },
});

export function bootstrap() {
  console.log("page bootstrap>>>");
  return vueLifecycles.bootstrap();
}

export function mount(props) {
  console.log("page mount>>>");
  return vueLifecycles.mount(props);
}

export function unmount() {
  console.log("page unmount>>>");
  return vueLifecycles.unmount();
}

window.addEventListener("single-spa:before-mount-routing-event", (evt) => {
  console.log("page>>>>>>>>before-mount-routing-event>>>>", evt);
});
