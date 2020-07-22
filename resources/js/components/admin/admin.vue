<template>
<div id="app">
    <div class="page-container">
        <!-- sidebar menu area start -->
        <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    
                </div>
            </div>
        <menu-admin></menu-admin>
        </div>
        <!-- sidebar menu area end -->
        <!-- main content area start -->
        <div class="main-content">
            <!-- page title area start -->
            <div class="page-title-area">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="breadcrumbs-area clearfix">
                            <h4 class="page-title pull-left"></h4>
                            <ul class="breadcrumbs pull-left">
                            <li><a href="#">Home</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 clearfix">
                        <div class="user-profile pull-right ">
                            <img class="avatar user-thumb" src="../../../../public/assets/images/author/avatar.png" alt="avatar">
                            <h4 @click.prevent="data" class="user-name dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{name}}<i class="fa fa-angle-down"></i></h4>
                            <div class="dropdown-menu" :class="{show:show==true}" >
                                <a @click.prevent="logout" class="dropdown-item" href="javascript:void(0)">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- page title area end -->
            <router-view></router-view>
        </div>
        <!-- main content area end -->
        <!-- footer area start-->
        <footer>
            <div class="footer-area">
                <p>Semoga Lebik Baik.</p>
            </div>
        </footer>
        <!-- footer area end-->
    </div>
</div>
</template>
<script>
import MenuAdmin from './menu'
export default {
  data(){
    return {
      show: null
    }
  },
  methods: {
    logout(){
        this.$store.dispatch('logout')
    },
    data : function() {
      this.show = !this.show
    }
  },
  computed: {
    name() {
        return this.$store.getters.name
    },
  },
  components: {
      MenuAdmin
  }
}
</script>
<style>

</style>