<template>
    <div class="main-menu">
        <div class="menu-inner">
            <nav>
                <ul class="metismenu" id="menu">
                    <li>
                        <router-link :to="{name:'dashboard'}"><i class="ti-dashboard"></i><span>Dashboard</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'admin/mahasiswa'}"><i class="ti-user"></i><span>Mahasiswa</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'admin/dosen'}"><i class="ti-user"></i><span>Dosen</span></router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'admin/matkul'}"><i class="ti-book"></i><span>Mata Kuliah</span></router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>