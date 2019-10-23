import Vue from "nativescript-vue";
import App from "./components/App";

Vue.registerElement(
    'CardView',
    () => require('@nstudio/nativescript-cardview').CardView
  );
  
new Vue({
    render: h => h(App)
}).$start();
