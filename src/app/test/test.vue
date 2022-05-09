<template>
    11 212121212
    {{ testService.Test }}
</template>

<script setup lang="ts">
import { TestService } from '@/test.service'
import { useDependency } from 'packages/module'

const testService = useDependency(TestService)
console.log(testService)
</script>
