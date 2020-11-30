<template>
  <div>
    <div class="jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">TKJ <sup>20</sup></h1>
        <h2>SMKN 5 MAKASSAR</h2>
        <p class="lead">
          Semua cerita tentang kita ada disini
        </p>
      </div>
    </div>
    <comp-nama />
    <comp-foto />
  </div>
</template>
<script>
import compFoto from '@/components/home/comp-foto'
import compNamaVue from '~/components/home/comp-nama.vue'
export default {
  components: {
    'comp-foto' : compFoto,
    'comp-nama' : compNamaVue
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