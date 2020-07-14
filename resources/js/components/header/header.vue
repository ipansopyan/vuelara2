<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <router-link :to="{name: '#dashboard'}" class="navbar-brand">Dashboard</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link :to="{name: '#auth/signin'}" class="nav-link">Signin</router-link>
      </li>
      <li class="nav-item active">
        <router-link :to="{name: '#auth/signup'}" class="nav-link">Signup</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>