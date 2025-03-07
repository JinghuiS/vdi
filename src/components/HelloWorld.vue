<script lang="ts">
import { TestService } from '@/test.service'
import { LookUp } from '@wendellhu/redi'
import { onProvider, useDependency } from 'packages'
import { ref } from 'vue'
</script>
<script setup lang="ts">
/**传参 */
const props = defineProps<{ msg: string }>()
const emit = defineEmits(['click'])
/**提供 */
onProvider([[TestService]])

const testService = useDependency(TestService)
const FatherTestService = useDependency(TestService, LookUp.SKIP_SELF)

function change() {
    testService.Test.value = '子组件的2'
    emit('click', '5')
}

const count = ref(0)
</script>

<template>
    <button @click="change">
        {{ testService.Test }}
    </button>
    <div>
        father
        {{ FatherTestService.Test }}
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
