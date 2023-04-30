<template>
  <div class="full-page">
    <div class="cards">
      <div class="card">card 1</div>
      <div class="card">card 2</div>
      <div class="card">card 3</div>
    </div>
  </div>
</template>
<style scope>
.full-page {
  height: 100vh;
  width: 100%;
  position: relative;
  margin-top: 50px;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.card {
  border: 1px solid white;
  height: 355px;
  width: 200px;
}
</style>