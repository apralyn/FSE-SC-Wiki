<template>
  <div class="search-bar">
    <input class="search" type="Text" placeholder="Search">
    <button>Search</button>
  </div>
</template>
<style>
.search-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto;
  margin-top: 25px;
}

.search {
  max-width: 75vw;
  min-width: 65vw;
  height: 85px;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px 0 0 10px;
}

button {
  background-color: white;
  width: 65px;
  height: 85px;
  border: 1px solid white;
  border-left: 2px solid rgba(88, 89, 88, 0.508);
  border-radius: 0 10px 10px 0;
}
</style>