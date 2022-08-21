const appStore = {
    namespace: true,
    state: {
        userId: 123,
        sex: 'F',
        ye: Boolean,
    },
    mutations: {
        setUserId(state: { userId: number; }, userId: number) {
            state.userId = userId
        },
    },
    actions: {
        setUserId(context: { commit: (arg0: string, arg1: number) => void; }, userId: number) {
            context.commit('setUserId', userId)
        },
    },
    getters: {
        userId: (state: { userId: number; }) => state.userId
    }
}

export default appStore;
