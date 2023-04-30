<template>
  <div class="home">
    <h1>Show Control Wiki Page</h1>
    <div class="search-bar">
      <input class="search" type="Text" placeholder="Search">
      <button>Search</button>
    </div>
  </div>
</template>
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

.serach-bar {
  display:block;
  flex-direction: row;
}

.search {
  width: 75vw;
  height: 65px;
  background-color: white;
  border: 1px solid white;
}

button {
  background-color: white;
  width: 50px;
  height: 65px;
  border: 1px solid white;
  border-left: 2px solid greenyellow;
}
</style>