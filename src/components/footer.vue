<template>
  <div class="bg-yellow-500">
    <div class="max-w-6xl h-48 m-auto">
      <div
        class="mx-2 my-4 flex flex-col md:items-center md:flex-row md:justify-between"
      >
        <img class="w-24" src="@/assets/logo.svg" alt="" />
        <div class="flex md:mt-0 mt-6 ">
          <img
            class="block p-3 h-10 bg-yellow-700 rounded-md"
            src="@/assets/instagram.svg"
            alt=""
          />
          <img
            class="block p-3 h-10 bg-yellow-700 rounded-md ml-4"
            src="@/assets/facebook.svg"
            alt=""
          />
        </div>
      </div>
      <div class="mx-2 mt-16  md:mt-28 flex justify-between">
        <div>
          <img src="@/assets/All+rights+Reserved.svg" alt="" />
        </div>
        <div>
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
