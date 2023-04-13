<template>
    <div>
      <nav class="navbar navbar-light bg-light">
        <nuxt-link to="/">
          <a class="navbar-brand">Indexpage</a>
        </nuxt-link>

        <nuxt-link to="/homepage">
          <a class="navbar-brand">Homepage</a>
        </nuxt-link>

        <nuxt-link to="/blogs/blog">
          <a class="navbar-brand">Blog</a>
        </nuxt-link>

        <nuxt-link to="/weather">
          <a class="navbar-brand">Weather-App</a>
        </nuxt-link>

        <nuxt-link to="/vi/todoapp">
          Todo App
        </nuxt-link>

        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <Nuxt></Nuxt>
    </div>
  </template>
<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
