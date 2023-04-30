<template>
  <div class="home">
    <h1>Show Control Wiki Page</h1>
    <SearchBar />
    <FloatCards />
    <div class="cards">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  </div>
</template>
<script>
import SearchBar from "../components/SearchBar.vue"
import FloatCards from "../components/FloatCards.vue"

export default {
  name: "HomeView",
  components: {
    SearchBar,
    FloatCards,
  }
}
</script>
<style scope>

.home {
  height: 90vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  padding: 20px;
  color: white;
}
</style>