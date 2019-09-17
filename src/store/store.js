import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        globalName: 'sinya-system',
    },
    mutations: {
        setGlobalName(state, newGlobalName) {
            state.globalName = newGlobalName;
        }
    },
    actions: {
        modifyGlobalName({ commit }, newGlobalName) {
            commit('setGlobalName', newGlobalName);
        }
    }
});