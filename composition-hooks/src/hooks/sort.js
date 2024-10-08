import { ref, computed } from 'vue';

export default function useSort(items, sortKey) {
    const sorting = ref(null);
    const sorted = computed(function () {
        if(!sorting.value) {
            return items.value;
        }
        return items.value.slice().sort((u1, u2) => {
            if (sorting.value === 'asc' && u1[sortKey] > u2[sortKey]) {
                return 1;
            } else if (sorting.value === 'asc') {
                return -1;
            } else if (sorting.value === 'desc' && u1[sortKey] > u2[sortKey]) {
                return -1;
            } else {
                return 1;
            }
        });
    });

    function sort(mode) {
        sorting.value = mode;
    }
    return [sorted, sort, sorting];
}