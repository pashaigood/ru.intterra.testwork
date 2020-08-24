<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import '~sanitize.css';
  @import '~sanitize.css/forms.css';
  @import '~sanitize.css/typography.css';
  @import 'assets/fonts/SFUIText/index.css';

  html, body {
    height: 100%;
  }

  #app {
    height: 100%;
    font-family: "SF UI Text", sans-serif;
    font-size: 11px;
    line-height: 13px;
    color: #333333;
  }
</style>
