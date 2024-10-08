import store from "@/store";
export const API_URL = 'https://vuejs-f944d-default-rtdb.firebaseio.com';

export default {
    async registerCoach(context, data) {
        // const userId = context.rootGetters.userId;
        const userId = (Math.floor(Math.random() * 1000000)).toString();
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        }
        await fetch(`${API_URL}/coaches/${userId}.json`, {
                method: 'PUT', body: JSON.stringify(coachData)});
        context.commit('registerCoach', {...coachData, id: userId});
        store.commit('setUser', userId);

    },
    async loadCoaches(context) {
        console.log('loading starts...')
        const response = await fetch(`${API_URL}/coaches.json`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.json();
        const coaches = [];
        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            }
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
    }

}