<template>
  <header>
    <div>
      1
    </div>
    <div>
      {{msg}}
    </div>
    <button @click="clickHeader">click</button>
  </header>
</template>

<script lang="ts">

class A{
  @test
  name() { return `1` }
}

function test(target:any, key: any, descriptor:any) {
  descriptor.writable = false
  console.log(target)
  console.log(key)
  console.log(descriptor);
}


// function test(){
//   // target.isTestable = true;               //利用修饰器给类添加静态属性
//   return function (target: any, key:any, descriptor:any) {
//     // target.prototype.isTestable = true;     //利用修饰器给类添加动态属性
//     console.log(target)    
//     console.log(key) 
//     console.log(descriptor) 
//   }
// }

let a = new A()
// a.name = () => {return '3'}
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

console.log(MyTestableClass.isTestable);

enum Color {Red, Green, Blue}
let c: Color = Color.Green;  // 1
console.log(c);
console.log(Color[2]);
 // true

// console.log(A.isTestable);       //true
// console.log(new A().isTestable);   //true


import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component

export default class Header extends Vue {
  @Prop()
  msg: string = '1'

  @Emit('clickHeader')
  clickHeader() {
    console.log(1);
  } 


}
</script>

<style>

</style>
