<template>
  <div class="bg-yellow-500">
    <div class="max-w-6xl h-48 m-auto flex justify-between">
      <div class="mx-2 my-4 flex flex-col justify-between">
        <img src="@/assets/logo.svg" alt="" />
        <div>
          <img src="@/assets/All+rights+Reserved.svg" alt="" />
        </div>
      </div>
      <div class="mx-2 my-4 flex flex-col justify-between">
        <div class="flex">
          <img
            class="block p-3 bg-yellow-700 rounded-md"
            src="@/assets/instagram.svg"
            alt=""
          />
          <img
            class="block p-3 bg-yellow-700 rounded-md ml-6"
            src="@/assets/facebook.svg"
            alt=""
          />
        </div>
        <div class="text-right">
          <img src="@/assets/Privacy+Policy.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>
