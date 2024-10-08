<template>
    <section>
        <base-card>

            <h2>Register as coach now!</h2>
            <coach-form @complete-form="save"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";

export default {
    name: "CoachRegistration",
    components: {CoachForm},
    methods: {
        save(form) {
            this.$store.dispatch('coaches/registerCoach', form);
            this.$router.replace('/coaches');
        }
    }
}
</script>

<style scoped>

</style>