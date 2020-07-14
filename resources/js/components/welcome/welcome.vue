<template>
<div class="login-area">
        <div class="container">
            <div class="login-box ptb--100">
                <form autocomplete="on">
                    <div class="login-form-head">
                        <h4>Sign In</h4>
                    </div>
                    <div class="login-form-body">
                        <div class="form-gp">
                            <!-- <label for="email">Email address</label> -->
                            <input v-model="email" id="email" type="email" name="email" class="@error('email') is-invalid @enderror" required>
                            <i class="ti-email"></i>
                            <div class="text-danger"></div>
                        </div>
                        <div class="form-gp">
                            <!-- <label for="password">Password</label> -->
                            <input v-model="password" type="password" id="password" name="password" class="@error('password') is-invalid @enderror" required >
                            <i class="ti-lock"></i>
                        </div>
                        <div class="submit-btn-area">
                            <button id="form_submit" @click.prevent="onSubmit">Submit <i class="ti-arrow-right"></i></button>
                        </div>
                    </div>
                </form>
            </div>
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