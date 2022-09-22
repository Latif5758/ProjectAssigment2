<template>
    <div class="container">
      <rak :listdata="list" @raku="additem($event)"/>
      <keranjang :listdata="list" @keranjangku="reduceitem($event)"/>
      <tombol v-if="cek>0" class="btn btn-success" @emitClick="total" text="Total"/>
    </div>
</template>
<script>
  export default {
    data(){
        return{
            list:[
                {
                    title: "Indomie Goreng rendang",
                    description: "Masakan instan Terenak didunia",
                    stock: 10,
                    harga: 3900,
                    keranjang: 0,
                    total: 0,
                },{
                    title: "Mie Gelas Rendang",
                    description: "Mie instant khusus anak kost",
                    stock: 5,
                    harga: 1500,
                    keranjang: 0,
                    total: 0,
                },{
                    title: "Bakmi Mewah",
                    description: "Kalau anak kosan jangan macam2 deh",
                    stock: 80,
                    harga: 10000,
                    keranjang: 0,
                    total: 0,
                },
            ],
            cek:0,
        }
    },
    methods:{
      additem(index){
        this.list[index].keranjang++
        this.list[index].stock--
        this.list[index].total+=this.list[index].harga
        this.cek++
      },
      reduceitem(index){
        this.list[index].keranjang--
        this.list[index].stock++
        this.list[index].total-=this.list[index].harga
        this.cek--
      },
      total(){
        let total = 0
        for (let index = 0; index < this.list.length; index++) {
            total+=this.list[index].total
        }
        alert("Total Harga Rp."+total)
      }
    }
}
</script>