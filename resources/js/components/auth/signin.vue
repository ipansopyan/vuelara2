<template>
   <div class="container">
    <div class="col-sm-5">
     <h4>login</h4>
       <form>
         <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>
         <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
         </div>
         <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
         </div>
         <button @click.prevent="onSubmit" class="btn btn-primary">Submit</button>
     </form>
    </div>
   </div>
</template>

<script>
export default {
  data(){
    return {
      email : null,
      password : null,
    }
  },
  methods : {
    onSubmit() {
    const formData = {
     email : this.email,
     password : this.password,
    }
    this.$store.dispatch('signin', {email: formData.email, password: formData.password})
  }
  }
}
</script>

<style>

</style>