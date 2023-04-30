<template>
  <div class="home">
    <h1>Show Control Wiki Page</h1>
    <div class="search-bar">
      <SearchBar />
    </div>
  </div>
</template>
<script>
import SearchBar from "../components/SearchBar.vue"
export default {
  name: "HomeView",
  components: {
    SearchBar,
  }
}
</script>
<style scope>
.home {
  height: 100vh;
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