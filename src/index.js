import Menu from './menu.vue'
import Vue from 'vue'
import "./css/main.css";

// // Say hello
console.log("🦊 Hello! Edit me in src/index.js");

if(document.getElementById('menu')) {
  // createApp(Menu).mount("#menu")
  console.log("The menu element exists")
  const vue = new Vue({
    el: '#menu',
    render: h => h(Menu)
  })
  console.log(vue)
} else {
  console.log("Element not found")
}