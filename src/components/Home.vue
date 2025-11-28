<template>
<div class="row">
    <h1>Pinia</h1>
    <hr/>
    <div class="col-md-6">
        <p>
            <strong>
                Sayı {{store.counter}}
            </strong>
        </p>
        <button class="btn btn-primary me-3" @click="store.add">+</button>
        <button class="btn btn-outline-secondary" @click="store.substract">-</button>
        <hr/>
        <p>
            <span>{{store.car.color}}</span> renkli <span>{{store.car.brand}}</span>
        </p>
        <button class="btn btn-primary">Arabayı ve Sayacı Güncelle</button>
        <hr/>
        <button class="btn btn-primary">Yazılarım</button>
    </div>
</div>
</template>

<script setup>
import {useCounterStore} from '@/stores/counter.js'


const store = useCounterStore();

// const add =()=>{
//     store.counter++;
// }

// const substract =()=>{
//     store.counter--;
// }

</script>

<style>

</style>