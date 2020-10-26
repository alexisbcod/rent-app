<<<<<<< Updated upstream
import Vue from 'vue'
import Vuex from 'vuex'
import dptosNamespace from './modules/dptos'
=======
import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase/app'
>>>>>>> Stashed changes

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< Updated upstream
  modules: {
    dptosNamespace
  }
})
=======
    state: {
        userInformation: []
    },
    mutations: {
        setUserParameters(state, value) {
            state.userInformation = value
            console.log(state.userInformation)
        },
    },
    actions: {
        validateUser: function({ commit }, userInformation) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    console.log("Existe usuario")
                    commit('setUserParameters', user)
                } else {
                    console.log("No existe usuario")
                    commit('setUserParameters', userInformation = null)
                }
            })
        }
    },
    modules: {},
});
>>>>>>> Stashed changes
