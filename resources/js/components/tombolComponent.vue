<template>
    <button type="button" class="warna" @click="$emit('emitClick')">{{text}}</button>
</template>

<script>
export default {
    props:{
        text:{
            type : String,
            default: ""
        },
        warna:{
            type : String,
            default : ""
        }
    },
}
</script>
