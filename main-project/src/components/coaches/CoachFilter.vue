<template>
    <base-card>
        <h2>Find your coach</h2>
        <span class="filter-option" :key="area.key" v-for="area in areas">
            <input type="checkbox" :id="area.key" @change="checkboxChange" :checked="area.selected" v-model="area.selected" />
            <label :for="area.key" style="text-transform: capitalize;">{{area.key}}</label>
        </span>
    </base-card>
</template>

<script>

export default {
    name: "CoachFilter",
    emits: ['filter'],
    data() {
        return {
            areas: []
        }
    },
    methods: {
        checkboxChange() {
            this.$emit('filter', this.areas.reduce((a, c) => ({...a, [c.key]: c.selected}),{}))
        }
    },
    created() {
        // this.areas = this.$store.getters['coaches/getAllAreas']
        //     .map(i => ({key: i, selected: true}));
        this.areas = ['career', 'frontend', 'backend'].map(i => ({key: i, selected: true}))
    },
}
</script>

<style scoped>

</style>