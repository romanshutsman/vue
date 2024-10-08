<template>
  <h2>My Course Goal</h2>

    <h3 v-if="refData.isGoalShown">{{refData.goal}}</h3>
    <button @click="toggle">Toggle Goal</button>


  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
<!--  <h3 v-if="isGoalShown">{{goal}}</h3>-->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
<!--  <button @click="toggle">Toggle Goal</button>-->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>


<script setup>
    import { reactive } from 'vue';

    const refData = reactive({goal: 'Learn Vue.js', isGoalShown: true});
    function toggle() {
        refData.isGoalShown = !refData.isGoalShown;
    }
// export default {
//     // setup() {
//     //     const refData = reactive({goal: 'Learn Vue.js', isGoalShown: true});
//     //
//     //     function toggle() {
//     //         refData.isGoalShown = !refData.isGoalShown;
//     //     }
//     //
//     //     return {refData, toggle}
//     // }
//     // setup() {
//     //     const refData = ref({goal: 'Learn Vue.js', isGoalShown: true});
//     //
//     //     function toggle() {
//     //         refData.value.isGoalShown = !refData.value.isGoalShown;
//     //     }
//     //
//     //     return {refData, toggle}
//     // }
//     // setup() {
//     //     const rGoal = ref('Learn Vue.js');
//     //     const rGaolShown = ref(true);
//     //
//     //     function toggle() {
//     //       rGaolShown.value = !rGaolShown.value;
//     //     }
//     //
//     //     return {goal: rGoal, isGoalShown: rGaolShown, toggle}
//     // }
// }
</script>
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--      return {-->
<!--          goal: 'Learn Vue.js',-->
<!--          isGoalShown: true-->
<!--      }-->
<!--  },-->
<!--    methods: {-->
<!--      toggle() {-->
<!--          this.isGoalShown = !this.isGoalShown;-->
<!--      }-->
<!--    }-->
<!--}-->
<!--</script>-->

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>