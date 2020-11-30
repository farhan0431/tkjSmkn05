<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <nuxt-link to="#" class="nav-link"> Beranda </nuxt-link>
          <nuxt-link to="#" class="nav-link"> Galeri </nuxt-link>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>


<style scoped>


  .navbar-nav a {
    color: #ecf0f1;
  }

</style>

