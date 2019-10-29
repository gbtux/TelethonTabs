import Vue from "nativescript-vue";
import App from "./components/App";
import store from "./store/"
import Pager from 'nativescript-pager/vue';

Vue.use(Pager);

Vue.registerElement(
    'CardView',
    () => require('@nstudio/nativescript-cardview').CardView
  );


new Vue({
    render: h => h(App),
    store
}).$start();
