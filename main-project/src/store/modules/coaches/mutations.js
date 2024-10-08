export default {
    registerCoach(state, payload, ...rest) {
        console.log(rest)
        state.coaches.push(payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload
    }
}