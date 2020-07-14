<template>
<div id="app">
 <p>asdsa</p>
</div>
</template>
<script>
export default {
  data(){
    return {
      show: null
    }
  },
  methods: {
    data : function() {
      this.show = !this.show
    }
  },
  computed: {
    name() {
      return !this.$store.getters.user ? false : this.$store.getters.user.name
    },
    create() {
      this.$store.dispatch('fetchUser')
    }
  }
}
</script>
<style>

</style>