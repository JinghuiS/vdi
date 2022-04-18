<script lang="ts">
import { TestService } from '@/test.service'
import { onProvider, useDependency } from 'packages'
import { ref } from 'vue'
</script>
<script setup lang="ts">
/**传参 */
defineProps<{ msg: string }>()
/**提供 */
onProvider([[TestService]])

const testService = useDependency(TestService, { self: true })
const FatherTestService = useDependency(TestService)

function change() {
    testService.Test.value = '2'
}

const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>
    {{ FatherTestService.Test }}
    {{ testService.Test }}
    <button @click="change()">测试</button>
    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
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
