<template>
  <div class="home">
    <!-- <i-input></i-input>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="intoBtn" @click="handleInto">
      {{author}}
    </div>
    <Header :msg="headerMsg" @clickHeader="clickHeader"></Header>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/header/index.vue'; // @ is an alias to /src
import { Getter, Mutation, State } from 'vuex-class'

@Component({
  components: {
    HelloWorld,
    Header
  }
})
export default class Home extends Vue {

  @Provide() headerMsg: string = '1'
  // @Provide() headerMsg2: string = '1'

  @State(state => state.author) author: any;
  // @Getter author: any;//作者
  //Mutation
  @Mutation SET_AUTHOR: any;

  mounted () {
    console.log(this.author);
  }

  handleInto() {
    console.log(1)
    console.log(this.$router);
    this.$router.push({ name: 'page' });
  }
  clickHeader() {
    console.log('object');
    this.headerMsg = this.headerMsg + '2'
  }
}
</script>

<style lang="stylus" scoped>
.intoBtn
  height 100px
  width 100px
  position fixed
  bottom 40px
  right 40px
</style>
