<script setup lang="ts">
import { icons } from './icons'

const props = defineProps({ name: String })

const selected_icon = icons[props.name!]
const width = selected_icon.box_width
const height = selected_icon.box_height
</script>

<template>
  <svg :viewBox="`0 0 ${width} ${height || width}`" v-html="selected_icon.svg"></svg>
</template>
