<script setup lang="tsx">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onProvider, useDependency } from 'packages'

import HelloWorld from './components/HelloWorld.vue'
import { TestService } from './test.service'

onProvider([[TestService]])
const testService = useDependency(TestService, { self: true })

function changeTest(a: any) {
    testService.Test.value = '父组件的2'
}
</script>

<template>
    {{ testService.Test }}
    <button>修改</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="'1'" />
    <!-- <router-view></router-view> -->
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
