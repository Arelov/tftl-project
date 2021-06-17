<template>
  <div class="relative">
    <img
      class="rounded-md w-full h-full object-cover"
      :src="require(`@/assets/images/${name}.jpg`)"
      alt=""
    />
    <div
      class="rounded-md absolute left-0 top-0 z-10 w-full h-full bg-black opacity-40"
    ></div>
    <div
      :style="urlImg"
      class="absolute z-10 left-0 top-0 text-white font-ht p-4"
    >
      <div>{{ age }}</div>
      <div class="font-hr pb-2 pt-4">{{ name }}</div>
      <div class="flex">
        <div class="pr-4">Eye color : {{ eyeColor }}</div>
        <div class="pr-4">Height : {{ height }}</div>
        <div>Mass : {{ mass }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    eyeColor: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    mass: {
      type: String,
      required: true,
    },
  },
})
</script>
