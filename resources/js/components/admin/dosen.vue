<template>
  <div class="main-content-inner">
 <div class="row">
     <!-- Progress Table start -->
  <div class="col-12 mt-5">
   <div class="card">
    <div class="card-body">
     <h4 class="header-title">Data {{display}}</h4>
     <div class="d-flex justify-content-end">
         <button class="btn btn-xs btn-primary" @click.prevent="showModal">add</button>
     </div>
     <div class="modal fade bd-example-modal-sm show" v-bind:style="{display: display }" >
         <div class="modal-dialog">
             <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title">Data Dosen</h5>
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
            <tbody v-for="(dosen, index) in dosens" :key="dosen.id">
              <td>{{index+1}}</td>
              <td>{{dosen.name}}</td>
              <td>{{dosen.email}}</td>
              <td><a href="javascript:void(0)" @click.prevent="onDelete(dosen.id)" class="text-danger"><i class="ti-trash"></i></a></td>
            </tbody>
       </table>
       <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item" v-bind:class="[{disabled : !pagination.prev_page_url}]" >
                <a class="page-link" href="javascript:void(0)" @click.prevent="getdsn(pagination.prev_page_url)" >Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">
                    {{pagination.current_page}} of {{pagination.last_page}}
                </a></li>
            <li class="page-item " v-bind:class="[{disabled : !pagination.next_page_url}]" >
                <a class="page-link" href="javascript:void(0)" @click.prevent="getdsn(pagination.next_page_url)">Next</a>
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
      this.$store.dispatch('dsndisplay','block')
    },
    close() {
      this.$store.dispatch('dsndisplay','none')
      this.$store.dispatch('dsnResetForm')
    },
    onSubmit(){
      this.$store.dispatch('dsnStore',this.user)
      this.getdsn()
    },
    onDelete(dsnId){
      let decision = confirm('Are you sure?');
      if (decision == true) {
        this.$store.dispatch('dsnDelete',dsnId)
      }
    },
    getdsn(param){
      this.$store.dispatch('dsnGet',param)
    }
  },
  computed: {
    dosens() {
      return this.$store.getters.dsnGetDsn
    },
    pagination() {
      return this.$store.getters.dsnpagination
    },
    error(){
      return this.$store.getters.dsnerror
    },
    display(){
      return this.$store.getters.dsndisplay
    },
    user(){
      return this.$store.getters.dsnuser
    }
  },
  mounted() {
    this.$store.dispatch('dsnGet')    
  }
}
</script>
<style>

</style>