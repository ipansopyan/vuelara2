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
                            <h4 @click.prevent="data" class="user-name dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{name}}<i class="fa fa-angle-down"></i></h4>
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
                    <!-- basic table start -->
                    <div class="col-lg-6 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Generate</h4>
                                <form class="was-validated" method="POST" @submit.prevent="gqr">
                            <div class="form-group">
                            <label class="col-form-label"></label>
                            <select v-model="matkul"  class="custom-select" required>
                                <option value="">--Select Matkul--</option>
                                <option v-for="matkul in matkuls" :key="matkul.id" :value="matkul.id" >{{matkul.name_matkul}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select v-model="prt" class="custom-select"  required>
                                    <option value="">--Select Meeting--</option>
                                    <option v-for="i in 16" :key="i"  :value="i">{{i}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-rounded btn-xs pull-right" @click.prevent="gqr" >generate</button>
                            <div class="modal fade bd-example-modal-lg" :class="{show:qr==true}" v-bind:style="{display: display }" >
                                    <div class="modal-dialog modal-lg modal-xl">
                                        <div class="modal-content">
                                            <!-- <div class="modal-header">
                                                <button @click.prevent="closeModal" type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                                            </div> -->
                                            <div class="modal-body d-flex justify-content-center">
                                                <div class="modal-body d-flex justify-content-center">
                                                    <qrcode-vue :value="value" size='200' ></qrcode-vue>
                                            </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button @click.prevent="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </form>
                            </div>
                        </div>
                    </div>
                    <!-- basic table end -->
                
                    <!-- Hoverable Rows Table start -->
                    <div class="col-lg-6 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Show</h4>
                                <form class="was-validated" method="POST" @submit.prevent="gqr">
                            <div class="form-group">
                            <label class="col-form-label"></label>
                            <select class="custom-select" required>
                                <option value="">--Select Matkul--</option>
                                <option v-for="matkul in matkuls" :key="matkul.id" :value="matkul.id" >{{matkul.name_matkul}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button @click.prevent="showPresent" type="button" class="pull-right btn btn-primary" data-dismiss="modal">Show</button>
                        </div>
                    </form>
                            </div>
                        </div>
                    </div>
                    <!-- Hoverable Rows Table end -->
                    <!-- Progress Table start -->
                    <div v-bind:style="{display: displayp }" class="col-12 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Progress Table</h4>
                                <div class="single-table">
                                    <div class="table-responsive">
                                        <table class="table table-hover progress-table text-center">
                                            <thead class="text-uppercase">
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Mahasiswa</th>
                                                    <th scope="col">mata Kuliah</th>
                                                    <th scope="col">1</th>
                                                    <th scope="col">2</th>
                                                    <th scope="col">3</th>
                                                    <th scope="col">4</th>
                                                    <th scope="col">5</th>
                                                    <th scope="col">6</th>
                                                    <th scope="col">7</th>
                                                    <th scope="col">8</th>
                                                    <th scope="col">9</th>
                                                    <th scope="col">10</th>
                                                    <th scope="col">11</th>
                                                    <th scope="col">12</th>
                                                    <th scope="col">13</th>
                                                    <th scope="col">14</th>
                                                    <th scope="col">15</th>
                                                    <th scope="col">16</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Progress Table end -->
                </div>
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
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default {
  data(){
    return {
      show      : null,
      matkul    : null,
      prt       : null,
      qr        : null,
      display   : 'none',
      displayp   : 'none',
      value     : "",
    }
  },
  methods: {
    data : function() {
      this.show = !this.show
    },
    gqr(){
    this.value = 'http://192.168.43.184:8000/api/present'
    this.value = this.value+'?mtkl_id='+this.matkul+'&prt='+this.prt
    if (this.matkul &&  this.prt != "") {
        this.display = 'block'
        this.qr = !this.qr
    }
    },
    showPresent(){
        this.displayp = 'block'
    },
    closeModal() {
    this.display = 'none'
    this.qr = !this.qr
    }
  },
  computed: {
    name() {
        return this.$store.getters.name
    },
    matkuls(){
        return this.$store.getters.dosenMatkul
    },
  },
  mounted(){      
      this.$store.dispatch('getmatkuls')
  },
  components : {
    QrcodeVue,
  }
}
</script>
<style>

</style>