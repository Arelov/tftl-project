<template>
  <div class="flex flex-col h-screen justify-between">
    <div>
      <Header />
      <div class="max-w-6xl w-full m-auto">
        <div class="mx-2">
          <div class="text-4xl pt-10 pb-6">
            People
          </div>
          <div class="flex justify-between items-center pb-8">
            <div>
              <Filter
                @selectValue="eyeColor = $event"
                class="mr-8"
                :list="['blue', 'blue-gray', 'brown', 'red', 'yellow']"
                :isLeft="true"
              >
                Eye color <img class="m-1" src="@/assets/down.svg" />
              </Filter>
              <LongFilter
                class="mr-8"
                :name="'Height'"
                :minValue="96"
                :maxValue="202"
                :nameValue="'cm'"
                @updateValue="height = $event"
              />
              <LongFilter
                :name="'Age'"
                :minValue="12"
                :maxValue="112"
                :nameValue="'BBY'"
                @updateValue="age = $event"
              />
            </div>
            <Filter
              :list="['age', 'mass', 'height']"
              :isLeft="false"
              @selectValue="sortBy = $event"
            >
              <div class="hidden md:flex">
                Sort by <img class="m-1" src="@/assets/down.svg" />
              </div>
              <img
                class="md:hidden p-1"
                src="@/assets/clarity_sort-by-line.svg"
              />
            </Filter>
          </div>
          <div class="md:flex flex-wrap w-full myP">
            <div
              class="calcSize h-full ml-2 mb-2"
              v-for="e in people"
              :key="e.name"
            >
              <Card
                class="h-80"
                :name="e.name"
                :eyeColor="e.eye_color"
                :age="e.birth_year"
                :height="e.height"
                :mass="e.mass"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue"
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
import Filter from "@/components/filter.vue"
import LongFilter from "@/components/long-filter.vue"
import axios from "axios"
import Card from "@/components/card.vue"
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    Filter,
    LongFilter,
    Card,
  },
  data() {
    return {
      sortBy: null,
      eyeColor: null,
      height: null,
      age: null,
    }
  },
  computed: {
    people() {
      return this.$store.getters.getPeople(
        this.age,
        this.height,
        this.eyeColor,
        this.sortBy
      )
    },
  },
})
</script>

<style scoped>
.myP {
  margin-left: -0.5rem;
}

@media (min-width: 768px) {
  .calcSize {
    width: calc(50% - 0.5rem);
  }
}
</style>
