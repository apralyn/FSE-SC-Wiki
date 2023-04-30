<template>
  <div class="search-bar">
    <input class="search" type="Text" placeholder="Search">
    <button>Go</button>
  </div>
</template>
<style>
.search-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 15px;
}
.search {
  max-width: 75vw;
  min-width: 65vw;
  height: 80px;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px 0 0 10px;
}
input,
input::placeholder {
    font: 20px/3 sans-serif;
}

button {
  background-color: white;
  width: 65px;
  height: 80px;
  border: 1px solid white;
  border-left: 2px solid rgba(88, 89, 88, 0.508);
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  font: 20px/3 sans-serif;
}
</style>