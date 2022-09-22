<template>
    <div class="container">
        <h1>Semua Produk</h1>
            <div class="row">
                <div  class="col-sm">
                    <span>Name</span>
                </div>
                <div  class="col-sm">
                    <span>Description</span>
                </div>
                <div  class="col-sm">
                    <span>Stock</span>
                </div>
                <div  class="col-sm">
                    <span>Price</span>
                </div>
                <div class="col-sm" align="center">
                </div>
            </div>
            <hr>
            <div v-for="(item,index) in listdata" :key="index">
                <div class="row">
                    <div  class="col-sm">
                        {{item.title}}
                    </div>
                    <div  class="col-sm">
                        {{item.description}}
                    </div>
                    <div  class="col-sm">
                        {{item.stock}}
                    </div>
                    <div  class="col-sm">
                        Rp. {{item.harga}}
                    </div>
                    <div class="col-sm" align="center">
                        <tombol v-if="item.stock>0" class="btn btn-primary" @emitClick="tambah(index)" text="Add item"/>
                        <span v-else>Habis!</span>
                    </div>
                </div>
                <hr>
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
        tambah(index){
            this.$emit("raku",index)
        }
    }
}
</script>
