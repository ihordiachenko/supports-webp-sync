<template>
    <div class="content">
        <img @load="onLoad(true)" @error="onLoad(false)" class="image" alt="sample webp image" src="./assets/img.webp" />
        <h1>Does my browser support WebP?</h1>
        <p class="result" :class="{'success': isWebpSupported, 'failure': !isWebpSupported}">
        {{ isWebpSupported ? 'YES' : 'NO' }}
        </p>
        <h2>
            <a href="https://www.npmjs.com/package/supports-webp-sync">supports-webp-sync</a> output:
            <span :class="{'success': isWebpSupportedSync, 'failure': !isWebpSupportedSync}">
                {{isWebpSupportedSync}}
            </span>
        </h2>
    </div>
    <div class="footer">
        {{ userAgent }}
    </div>

</template>

<script setup>
import {ref} from 'vue'
import {checkWebPSupport} from '../../lib/index.esm'

const isWebpSupportedSync = checkWebPSupport()
const userAgent = navigator.userAgent

console.log(userAgent)

const isWebpSupported = ref(null)
const onLoad = (success) => {
    isWebpSupported.value =  success
}

</script>

<style>

html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-areas:
    "content"
    "footer";
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100%;
  max-height: 100%;
}

.content {
  grid-area: "content";
  text-align: center;
}

.image {
    width: 640px;
    height: auto;
    margin: 60px;
}

.result {
    font-size: 3em;
    font-weight: bold;
}

@media (max-width: 600px) {
    .image {
        width: 320px;
    }

    .result {
        font-size: 2em;
    }
}

.success {
    color: green;
}

.failure {
    color: red;
}

.footer {
    width: 100%;
    padding: 30px 10px;
    text-align: center;
    grid-area: "footer";
}

</style>
