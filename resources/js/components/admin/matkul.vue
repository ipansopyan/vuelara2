<template>
  <div class="main-content-inner">
 <div class="row">
     <!-- Progress Table start -->
  <div class="col-12 mt-5">
   <div class="card">
    <div class="card-body">
     <h4 class="header-title">Data Mata Kuliah</h4>
     <div class="d-flex justify-content-end">
         <button class="btn btn-xs btn-primary" @click.prevent="showModal">add</button>
     </div>
       <div class="modal fade bd-example-modal-sm show" v-bind:style="{display : display}" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Data Mata Kuliah</h5>
                        <button @click.prevent="close" type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    </div>
                    <form class="was-validated" @submit.prevent="onSubmit" method="post">
                    <div class="modal-body">
                        <div class="form-group">
                            <input required v-model="matkul.name" class="form-control form-control" type="text" placeholder="nama matakuliah">
                        </div>
                        <div class="form-group">
                        <label class="col-form-label">Select</label>
                        <select v-model="matkul.userId" required  class="form-control">
                            <option>--select dosen--</option>
                            <option v-for="dosen in dosens" :key="dosen.id" :value="dosen.id" >{{dosen.name}}</option>
                        </select>
                </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click.prevent="close">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
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
                   <th scope="col">dosen</th>
                   <th>opsi</th>
               </tr>
           </thead>
            <tbody v-for="(matkul,index) in matkuls" :key="matkul.id">
                <td>{{(pagination.current_page*pagination.per_page)-pagination.per_page + index+1}}</td>
                <td>{{matkul.name_matkul}}</td>
                <td>{{matkul.name}}</td>
                <td>
                    <a href="javascript:void(0)" @click.prevent="editMatkul(matkul)" class="text-secondary"><i class="fa fa-edit"></i></a>
                    <a href="javascript:void(0)" @click.prevent="onDelete(matkul.id)" class="text-danger"><i class="ti-trash"></i></a>
                </td>
            </tbody>
       </table>
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item" v-bind:class="[{disabled : !pagination.prev_page_url}]" >
                <a class="page-link" href="javascript:void(0)" @click.prevent="getmatkul(pagination.prev_page_url)" >Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="javascript:void(0)">
                    {{pagination.current_page}} of {{pagination.last_page}}
                </a></li>
            <li class="page-item " v-bind:class="[{disabled : !pagination.next_page_url}]" >
                <a class="page-link" href="javascript:void(0)" @click.prevent="getmatkul(pagination.next_page_url)">Next</a>
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
        edit : false
    }
  },
  methods: {
     onDelete(matkulId){
      let decision = confirm('Are you sure?');
      if (decision == true) {
        this.$store.dispatch('adminMtklDelete',matkulId)
        
      }
    },
    editMatkul(param){      
        this.$store.dispatch('adminDosenAll');
        this.matkul.id  = param.id
        this.matkul.name = param.name_matkul
        this.matkul.userId = param.user_id
        
        
        this.edit = true
        this.$store.dispatch('mtkldisplay','block')
    },
   showModal() {
      this.$store.dispatch('mtkldisplay','block')
      this.$store.dispatch('adminDosenAll');
    },
    close() {
      this.$store.dispatch('mtkldisplay','none')
    },
    onSubmit(){
        if (this.edit === false) {
            this.$store.dispatch('adminMtklStore',this.matkul)
            this.$store.dispatch('mtkldisplay','none')
        }        
        if (this.edit === true) {
          this.$store.dispatch('adminMtklUpdate',this.matkul)
            this.$store.dispatch('mtkldisplay','none')
        }
      this.edit = false
    },
    getmatkul(param){
      this.$store.dispatch('adminGetMatkul',param)
    }
  },
  computed: {
    matkuls(){
      return this.$store.getters.adminGetMatkul
    },
    display(){
      return this.$store.getters.display
    },
    matkul(){
        return this.$store.getters.adminMatkul
    },
    pagination() {
      return this.$store.getters.matkulpagination
    },
    dosens() {
      return this.$store.getters.dsnGetDsn
    },
  },
  mounted() {
    this.$store.dispatch('adminGetMatkul')
  }
}
</script>
<style>

</style>