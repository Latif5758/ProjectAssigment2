<template>
    <div class="container">
        <h1>keranjang Barang</h1>
        <div class="row">
                <div class="col-sm">
                    <span>Name</span>
                </div>
                <div class="col-sm">
                    <span>Quantity</span>
                </div>
                <div class="col-sm">
                    <span>Harga</span>
                </div>
                <div  class="col-sm">
                </div>
            </div>
            <hr>
        <div @rak="tambah(index)" :index="index"></div>
        <div v-for="(item,index) in listdata" :key="index" >
            <div class="row">
                <div v-if="item.keranjang>0" class="col-sm">
                    {{item.title}}
                </div>
                <div v-if="item.keranjang>0" class="col-sm">
                    {{item.keranjang}}
                </div>
                <div v-if="item.keranjang>0" class="col-sm">
                    <span>Rp. {{item.total}}</span>
                </div>
                <div v-if="item.keranjang>0" class="col-sm">
                    <tombol @emitClick="kurangi(index)" class="btn btn-danger" text="kurangi"/>
                </div>
            </div>
            <hr v-if="item.keranjang>0">
        </div>
        </div>
</template>

<script>
export default {
    props:{
        listdata:{
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods:{
        kurangi(index){
            this.$emit("keranjangku",index)
        },
    }
}
</script>
