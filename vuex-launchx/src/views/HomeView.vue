<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <Counter/>
    <Cuadrado/>
    <Buttons/>
   
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Buttons from   "../components/Buttons.vue";

export default {
  name: 'HomeView',
  components:{
    Counter,
    Cuadrado, 
    Buttons,
  }
}
</script>

<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}

.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.cuadrado{
  font-size: 25px;
}
</style>