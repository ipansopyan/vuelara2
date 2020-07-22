<template>
  <div class="main-content-inner">
    <div class="row">
      <!-- seo fact area start -->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-md-6 mt-5 mb-3">
            <div class="card">
              <div class="seo-fact sbg1">
                <div class="p-4 d-flex justify-content-between align-items-center">
                  <div class="seofct-icon">
                    <i @click.prevent="click" class="ti-user"></i>Dosen
                  </div>
                  <h2>{{dosens}}</h2>
                </div>
                <canvas id="seolinechart1" height="50"></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-md-5 mb-3">
            <div class="card">
              <div class="seo-fact sbg2">
                <div class="p-4 d-flex justify-content-between align-items-center">
                  <div class="seofct-icon">
                    <i class="ti-user"></i> Mahasiswa
                  </div>
                  <h2>{{mahasiswas}}</h2>
                </div>
                <canvas id="seolinechart2" height="50"></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-md-5 mb-3">
            <div class="card">
              <div class="seo-fact sbg2">
                <div class="p-4 d-flex justify-content-between align-items-center">
                  <div class="seofct-icon">
                    <i class="ti-book"></i> Mata Kuliah
                  </div>
                  <h2>{{matkuls}}</h2>
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
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("dsnGet");
    this.$store.dispatch("mhsGet");
    this.$store.dispatch("adminGetMatkul");
  },
  methods: {
    click() {
      console.log(this.dosens);
    }
  },
  computed: {
    dosens() {
      return this.$store.getters.dsnpagination.total;
    },
    mahasiswas() {
      return this.$store.getters.mhspagination.total;
    },
    matkuls() {
      return this.$store.getters.matkulpagination.total;
    }
  }
};
</script>