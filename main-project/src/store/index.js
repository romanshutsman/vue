import {createStore} from "vuex";

import coachesModule from './modules/coaches'
import requestsModule from './modules/requests'

export const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: null
        }
    },
    mutations: {
        setUser(state, payload) {
            console.log('setUser', payload)
            state.userId = payload
        }
    },
    actions: {
        setUser(context, payload) {
            context.commit('setUser', payload);
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        },
    }
});

export default store;