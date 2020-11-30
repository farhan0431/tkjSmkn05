<template>
  <div>
    <div class="jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">TKJ <sup>20</sup></h1>
        <p class="lead">SMKN 5 MAKASSAR</p>
      </div>
    </div>
    <comp-foto />
  </div>
</template>
<script>
import compFoto from '@/components/home/comp-foto'
import CompFoto from '~/components/home/comp-foto.vue'
export default {
  components: {
    'comp-foto' : compFoto
  }
}
</script>
<style scoped>
  .jumbotron-fluid {
    z-index: 9999;
    margin-top: 50px;
    color: #ecf0f1;
  }

  .jumbotron-fluid .container h1 {
    text-align: right;
  }
</style>