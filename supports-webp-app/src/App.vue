<template>
  <img class="image" alt="sample webp image" src="./assets/img.webp" />
  <h1>Does my browser support WebP?</h1>
  <p class="result" :class="{'success': isWebpSupported, 'failure': !isWebpSupported}">{{ isWebpSupported ? 'YES' : 'NO' }}</p>
  <p class="footer">{{ userAgent }}</p>
</template>

<script setup>
import {checkWebPSupport} from '../..'


const isWebpSupported = checkWebPSupport()
const userAgent = navigator.userAgent
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: block;
  width: 100vw;
  min-height: 100vh;
}

.image {
    width: 640px;
    height: auto;
}

@media (max-width: 600px) {
    .image {
        width: 320px;
    }
}

.result {
    font-size: 3em;
    font-weight: bold;
}

.success {
    color: green;
}

.failure {
    color: red;
}

.footer {
    width: 100%;
    text-align: center;
}

</style>
