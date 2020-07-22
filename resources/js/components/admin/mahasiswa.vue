<template>
  <div class="main-content-inner">
 <div class="row">
     <!-- Progress Table start -->
  <div class="col-12 mt-5">
   <div class="card">
    <div class="card-body">
     <h4 class="header-title">Data Mahasiswa</h4>
     <div class="d-flex justify-content-end">
         <button class="btn btn-xs btn-primary" @click.prevent="showModal">add</button>
     </div>
     <div class="modal fade bd-example-modal-sm show" v-bind:style="{display: display }" >
         <div class="modal-dialog">
             <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title">Data Mahasiswa</h5>
                     <button @click.prevent="close"  type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                 </div>
                 <form class="was-validated" @submit.prevent="onSubmit" method="post">
                 <div class="modal-body">
                     <div class="form-group">
                         <input v-model="user.name" required  class="form-control form-control" type="text" placeholder="name">
                         <p v-if="error.name != null" class="alert-danger">{{error.name}}</p>
                     </div>
                     <div class="form-group">
                         <input v-model="user.email" required class="form-control form-control" type="email" placeholder="email">
                        <p v-if="error.email != null" class="alert-danger">{{error.email[0]}}</p>
                     </div>
                     <div class="form-group">
                         <input v-model="user.password" required  class="form-control form-control" type="password" placeholder="password">
                         <p v-if="error.password != null" class="alert-danger">{{error.password[0]}}</p>
                     </div>
                     <div class="form-group">
                         <input v-model="user.password_confirmation" required  class="form-control form-control" type="password" placeholder="password confirmation">
                         <p v-if="error.password_confirmation != null" class="alert-danger">{{error.password_confirmation}}</p>
                     </div>
                 </div>
                 <div class="modal-footer">
                     <button @click.prevent="close" type="button" class="btn btn-secondary" >Close</button>
                     <button  type="submit" class="btn btn-primary">Save changes</button>
                 </div>
                 </form>
             </div>
         </div>
     </div>
     <div class="single-table">
      <div class="table-responsive">
       <table class="table tsble-striped text-center">
           <thead class="text-uppercase">
               <tr>
                   <th scope="col">No</th>
                   <th scope="col">Nama</th>
                   <th scope="col">Email</th>
                   <th>opsi</th>
               </tr>
           </thead>
            <tbody v-for="(mahasiswa, index) in mahasiswas" :key="mahasiswa.id">
              <td>{{(pagination.current_page*pagination.per_page)-pagination.per_page + index+1}}</td>
              <td>{{mahasiswa.name}}</td>
              <td>{{mahasiswa.email}}</td>
              <td><a href="javascript:void(0)" @click.prevent="onDelete(mahasiswa.id)" class="text-danger"><i class="ti-trash"></i></a></td>
            </tbody>
       </table>
       <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item" v-bind:class="[{disabled : !pagination.prev_page_url}]" >
                <a class="page-link" href="javascript:void(0)" @click.prevent="getmhs(pagination.prev_page_url)" >Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">
                    {{pagination.current_page}} of {{pagination.last_page}}
                </a></li>
            <li class="page-item " v-bind:class="[{disabled : !pagination.next_page_url}]" >
                <a class="page-link" href="javascript:void(0)" @click.prevent="getmhs(pagination.next_page_url)">Next</a>
            </li>
        </ul>
      </nav>
      </div>
     </div>
    </div>
   </div>
  </div>
     <!-- Progress Table end -->
 </div>
</div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    showModal() {
      this.$store.dispatch('display','block')
      this.$store.dispatch('mhsResetForm')

    },
    close() {
      this.$store.dispatch('display','none')
      this.$store.dispatch('mhsResetForm')
    },
    onSubmit(){
      this.$store.dispatch('mhsStore',this.user)
      this.getmhs()
    },
    onDelete(mhsId){
      let decision = confirm('Are you sure?');
          if (decision == true) {

      this.$store.dispatch('mhsDelete',mhsId)
          }
    },
    getmhs(param){
      this.$store.dispatch('mhsGet',param)
    }
  },
  computed: {
    mahasiswas() {
      return this.$store.getters.mhsGetMhs
    },
    pagination() {
      return this.$store.getters.mhspagination
    },
    error(){
      return this.$store.getters.mhserror
    },
    display(){
      return this.$store.getters.display
    },
    user(){
      return this.$store.getters.mhsuser
    }
  },
  mounted() {
    this.$store.dispatch('mhsGet')
  }
}
</script>
<style>

</style>