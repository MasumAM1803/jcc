export default {
    namespaced: true,
    state: {
        status: false,
        component: '',
        params: {}
    },
    getters: {
        status: state => state.status,
        component: state => state.component,
        params: state => state.params
    },
    mutations: {
        setStatus: ( state, status ) => {
            state.status = status
        },
        setComponent: ( state, {component, params} ) => {
            state.component = component
            state.params = params
        }
    },
    actions: {
        setStatus: ( {commit}, status) => {
            commit('setStatus', status)
        },
        setComponent: ( {commit}, {component, status}) => {
            commit('setComponent', {component, status})
            commit('setStatus', true)
        }
    }
}