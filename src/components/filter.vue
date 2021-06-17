<template>
  <div
    class="inline-block font-ht relative"
    @mouseenter="setActive(true)"
    @mouseleave="setActive(false)"
  >
    <button class="font-hr flex items-center focus:outline-none">
      <slot />
    </button>
    <transition :duration="100">
      <div
        class="absolute bg-white rounded-md my-shadow z-50"
        :class="[isLeft ? 'left-0' : 'right-0']"
        v-show="isActive"
      >
        <div
          class="m-5 cursor-pointer whitespace-nowrap"
          v-for="e in list"
          :key="e"
          @click="onClick(e)"
        >
          {{ e }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
    isLeft: {
      type: Boolean,
      required: true,
    },
  },
  data: function() {
    return { isActive: false }
  },
  methods: {
    setActive(value) {
      this.isActive = value
    },
    onClick(e) {
      this.$emit("selectValue", e)
      this.setActive(false)
    },
  },
})
</script>
<style scoped>
.my-shadow {
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
}
</style>
