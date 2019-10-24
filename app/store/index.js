import Vue from 'nativescript-vue';
import Vuex from "vuex";

Vue.use(Vuex);

import equipe from './modules/equipe'
import defi from './modules/defi'

export default new Vuex.Store({
    strict: true,
    modules: {
        equipe,
        defi
    }
})
