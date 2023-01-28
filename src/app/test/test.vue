<template>
    testVue
    {{ testService.Test }}
</template>

<script setup lang="ts">
import { TestService } from '@/test.service'
import { useDependency } from 'packages/module'

// const dialogRef = useOverlayRef()
// console.log(dialogRef)

const testService = useDependency(TestService)
</script>
