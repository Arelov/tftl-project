import axios from "axios"
import { createStore } from "vuex"

export default createStore({
  state: {
    people: null,
  },
  mutations: {
    setPeople(state, value) {
      state.people = value
    },
  },
  actions: {
    async getPeople(context) {
      const { data } = await axios.get("https://swapi.dev/api/people/")
      context.commit("setPeople", data.results)
    },
  },
  getters: {
    getPeople: (state) => (age, height, eyeColor, sortBy) => {
      let people = state.people
      if (people) {
        if (age) {
          people = people.filter((e) => {
            const birth_year = +e.birth_year.replace("BBY", "")
            return birth_year >= +age[0] && birth_year <= +age[1]
          })
        }
        if (height) {
          people = people.filter(
            (e) => +e.height >= +height[0] && +e.height <= +height[1]
          )
        }
        if (eyeColor) {
          people = people.filter((e) => e.eye_color === eyeColor)
        }
        if (sortBy) {
          if (sortBy === "age")
            people = people.sort((a, b) => {
              const a_birth_year = +a.birth_year.replace("BBY", "")
              const b_birth_year = +b.birth_year.replace("BBY", "")
              return a_birth_year - b_birth_year
            })
          else if (sortBy === "height")
            people = people.sort((a, b) => +a.height - +b.height)
          else if (sortBy === "mass")
            people = people.sort((a, b) => +a.mass - +b.mass)
        }
      }
      return people
    },
  },
})
