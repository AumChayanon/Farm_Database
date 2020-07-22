<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap"
      rel="stylesheet"
    />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Prompt", sans-serif;
  margin: 0;
}
#app{
  font-family: "Prompt", sans-serif;
  height: 100%;
  background-color: #ffffff;
}
</style>
