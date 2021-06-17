<template>
  <div
    class="inline-block font-ht"
    @mouseenter="setActive(true)"
    @mouseleave="setActive(false)"
  >
    <button class="font-hr flex items-center focus:outline-none">
      {{ name }} <img class="m-1" src="@/assets/down.svg" />
    </button>
    <transition :duration="100">
      <div
        class="absolute bg-white rounded-md my-shadow w-60 h-36 flex flex-col z-50 p-5"
        v-show="isActive"
      >
        <div class="flex">
          <input
            class="w-full mr-3 p-3 border border-gray-100 rounded-md"
            type="number"
            :value="firstValue"
            @change="setFirstValue"
          />
          <input
            class="w-full p-3 border border-gray-100 rounded-md"
            type="number"
            :value="secondValue"
            @change="setSecondValue"
          />
        </div>
        <div class="flex justify-between w-full py-3">
          <div>{{ minValue }} {{ nameValue }}</div>
          <div>{{ maxValue }} {{ nameValue }}</div>
        </div>
        <div class="w-full" ref="slider"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import noUiSlider from "nouislider"
import wNumb from "wnumb"
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    nameValue: {
      type: String,
      required: true,
    },
    minValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
  },
  data: function() {
    return {
      isActive: false,
      sliderValue: null,
      firstValue: this.minValue,
      secondValue: this.maxValue,
    }
  },
  methods: {
    setFirstValue: function(val) {
      this.firstValue = val.target.value
      this.$refs.slider.noUiSlider.set([val.target.value, this.secondValue])
    },
    setSecondValue: function(val) {
      this.secondValue = val.target.value
      this.$refs.slider.noUiSlider.set([this.firstValue, val.target.value])
    },
    setActive(value) {
      this.isActive = value
    },
  },
  mounted() {
    noUiSlider.create(this.$refs.slider, {
      start: [this.minValue, this.maxValue],
      connect: true,
      range: {
        min: this.minValue,
        max: this.maxValue,
      },
      format: wNumb({
        decimals: 0,
      }),
    })
    this.$refs.slider.noUiSlider.on("update", (values) => {
      this.firstValue = values[0]
      this.secondValue = values[1]
      this.$emit("updateValue", values)
    })
  },
})
</script>
<style scoped>
.my-shadow {
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
}
</style>
