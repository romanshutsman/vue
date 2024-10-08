import {API_URL} from "@/store/modules/coaches/actions";

export default {
    async contactCoach(context, payload) {
        const newReq = {
            userEmail: payload.email,
            message: payload.message,
        }
        const res = await fetch(`${API_URL}/requests/${payload.coachId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newReq)
            });

        const responseData = await res.json();

        newReq.id = responseData.name;
        newReq.coachId = payload.coachId;

        context.commit('addReq', newReq);
    },
    async fetchReqs(context) {
        console.log('fetchReqs')
        const coachId = context.rootGetters.userId;
        // const coachId = 'c3';
        console.log('fetchReqs coachId', coachId)
        const res = await fetch(`${API_URL}/requests/${coachId}.json`,
            {
                method: 'GET'
            });
        const data = await res.json();

        const reqs = [];

        for (const key in data) {
            const req = {
                id: key,
                coachId,
                userEmail: data[key].userEmail,
                message: data[key].message,
            }
            reqs.push(req);
        }

        context.commit('setReqs', reqs);
    }
}