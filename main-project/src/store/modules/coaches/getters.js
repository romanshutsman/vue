export default {
    coaches(state) {
        console.log('get coaches', state.coaches)
        return state.coaches;
    },
    hasCoaches(state) {
        return state?.coaches && state.coaches.length > 0;
    },
    getAllAreas(state) {
        return [...new Set(state.coaches.flatMap(i => i.areas))];
    },
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(c => c.id === userId);
    }
}