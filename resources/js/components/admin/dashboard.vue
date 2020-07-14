<template>
<div id="app">
    <div class="page-container">
        <!-- sidebar menu area start -->
        <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    
                </div>
            </div>
                <div class="main-menu">
        <div class="menu-inner">
            <nav>
                <ul class="metismenu" id="menu">
                    <li>
                        <router-link :to="{name:'admin'}"><i class="ti-dashboard"></i><span>Dashboard</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'admin/#/matkul'}"><i class="ti-dashboard"></i><span>Mata Kuliah</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'mahasiswa'}"><i class="ti-dashboard"></i><span>Mahasiswa</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'admin/#/dosen'}"><i class="ti-dashboard"></i><span>Dosen</span></router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
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
                            <img class="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar">
                            <h4 @click.prevent="data" class="user-name dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Kumkum Rai <i class="fa fa-angle-down"></i></h4>
                            <div class="dropdown-menu" :class="{show:show==true}" >
                                <a class="dropdown-item" href="#">Message</a>
                                <a class="dropdown-item" href="#">Settings</a>
                                <a class="dropdown-item" href="#">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- page title area end -->
         <div class="main-content-inner">
     <div class="row">
         <!-- seo fact area start -->
         <div class="col-lg-8">
             <div class="row">
                 <div class="col-md-6 mt-5 mb-3">
                     <div class="card">
                         <div class="seo-fact sbg1">
                             <div class="p-4 d-flex justify-content-between align-items-center">
                                 <div class="seofct-icon"><i class="ti-user"></i>Mahasiswa</div>
                                 <h2>{{'mhs'}}</h2>
                             </div>
                             <canvas id="seolinechart1" height="50"></canvas>
                         </div>
                     </div>
                 </div>
                 <div class="col-md-6 mt-md-5 mb-3">
                     <div class="card">
                         <div class="seo-fact sbg2">
                             <div class="p-4 d-flex justify-content-between align-items-center">
                                 <div class="seofct-icon"><i class="ti-user"></i> Dosen</div>
                                 <h2>{{'dsn'}}</h2>
                             </div>
                             <canvas id="seolinechart2" height="50"></canvas>
                         </div>
                     </div>
                 </div>
                <div class="col-md-6 mt-md-5 mb-3">
                     <div class="card">
                         <div class="seo-fact sbg2">
                             <div class="p-4 d-flex justify-content-between align-items-center">
                                 <div class="seofct-icon"><i class="ti-book"></i> Mata Kuliah</div>
                                 <h2>{{'matkul'}}</h2>
                             </div>
                             <canvas id="seolinechart2" height="50"></canvas>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <!-- seo fact area end -->
     </div>
 </div>

        </div>
        <!-- main content area end -->
        <!-- footer area start-->
        <footer>
            <div class="footer-area">
                <p>© Copyright 2018. All right reserved. Template by <a href="https://colorlib.com/wp/">Colorlib</a>.</p>
            </div>
        </footer>
        <!-- footer area end-->
    </div>
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