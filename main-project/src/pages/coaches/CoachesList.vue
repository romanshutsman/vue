<template>
    <section>
        <base-card>
            <CoachFilter @filter="filterChanged"></CoachFilter>
        </base-card>
    </section>
    <section>
        <base-card>


        <div class="controls">
            <base-button @click="load" mode="outline">Refresh</base-button>
            <base-button v-if="!isCoach" link to="/register">Register As Coach</base-button>
        </div>
        <ul v-if="hasCoaches">
            <coch-item v-for="coach in filteredCoaches" :key="coach.id"
                :id="coach.id"
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
            ></coch-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
        </base-card>
    </section>
</template>

<script>
import CochItem from '../../components/coaches/CochItem.vue';
import BaseCard from "@/components/UI/BaseCard.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
// import {API_URL} from "@/store/modules/coaches/actions";

export default {
    name: "CoachesList",
    components: {
        BaseCard,
        CochItem,
        CoachFilter
    },
    data() {
      return {
          filter: {}
      }
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches']
            return coaches
                .filter(i => Object.keys(this.filter).length
                    ? Object.entries(this.filter).some(([area, value]) => value && i.areas.includes(area))
                    : true);
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        },
        isCoach() {
            return false;
            // return this.$store.getters['coaches/isCoach']
        }
    },
    created() {
        console.log('created')
        // fetch(`${API_URL}/coaches.json`, {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(r => {
        //     console.log(r);
        // })
        this.load();
    },
    methods: {
        filterChanged(e) {
            // console.log(e);
            this.filter = e;
        },
        load() {
            this.$store.dispatch('coaches/loadCoaches');
        }
    }

}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>