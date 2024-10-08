export default {
    addReq(state, payload) {
        state.requests.push(payload);
    },
    setReqs(state, payload) {
        state.requests = payload;
    }
}