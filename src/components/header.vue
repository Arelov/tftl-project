<template>
  <div class="md:bg-yellow-500 font-hr">
    <div class="flex items-center justify-between max-w-6xl h-20 m-auto">
      <div class="m-2">
        <img src="@/assets/logo.svg" alt="" />
      </div>
      <div class="flex items-center justify-between m-2">
        <button 
          class="hidden md:flex items-center h-12 w-24 justify-center focus:outline-none"
        >
          En <img src="@/assets/down.svg" alt="" />
        </button>
        <router-link
          class="h-12 hidden md:flex items-center w-24 justify-center"
          to="/login"
          >Log in</router-link
        >
        <router-link
          class="md:bg-yellow-700 w-40 h-12 md:text-white flex items-center justify-center rounded-md"
          to="/registration"
          >Sign up</router-link
        >
        <button class="md:hidden"><img src="@/assets/Group+2100.svg" alt=""></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>
