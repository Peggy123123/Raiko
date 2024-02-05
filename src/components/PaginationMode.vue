<template>
<nav class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item" :class="{disabled : currentPage -1 <1}"><a class="page-link" href="#" @click.prevent="swichPage(currentPage -1 )">&lt</a></li>
      <li class="page-item" v-for="num in totalPage" :key="num" :class="{active : num === currentPage}"><a class="page-link" href="#" @click.prevent="swichPage(num)">{{num}}</a></li>
      <li class="page-item" :class="{disabled : currentPage+1 > totalPage}"><a class="page-link" href="#" @click.prevent="swichPage(currentPage+1)">&gt</a></li>
    </ul>
  </nav>
</template>


<script>
export default {
    props: ["totalPage", "currentPage"],
  methods: {
    swichPage(page) {
      this.$emit("swichPage", page);
    },
  },
}
</script>