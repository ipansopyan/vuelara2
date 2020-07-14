<template>
   <div class="container">
    <div class="col-sm-5">
     <h4>Signup</h4>
       <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="name" type="text" class="form-control" id="name">
         </div>
         <div class="form-group">
          <label for="email">Email address</label>
          <input v-model="email" type="email" class="form-control" id="email">
         </div>
         <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" class="form-control">
         </div>
         <div class="form-group">
          <label for="password">Password confirmation</label>
          <input v-model="password_confirmation" type="password" class="form-control">
         </div>
         <button @click.prevent="onSubmit" type="submit" class="btn btn-primary">Submit</button>
     </form>
    </div>
   </div>
</template>

<script>
export default {
 data() {
  return {
   name  : '',
   email : '',
   password : '',
   password_confirmation : ''
  }
 },
 methods: {
  onSubmit() {
    const formData = {
     name  : this.name,
     email : this.email,
     password : this.password,
     password_confirmation : this.password_confirmation
    }
    console.log(formData);
    this.$store.dispatch('signup',
    {
      name  : formData.name,
      email : formData.email,
      password  : formData.password,
      password_confirmation : formData.password_confirmation
    })
  }
 }
}
</script>

<style>

</style>