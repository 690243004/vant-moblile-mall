<template>
  <div class="spinner-wrapper">
    <div class="spinner">
      <div :style="{ backgroundColor: themeColor }" class="rect1"></div>
      <div :style="{ backgroundColor: themeColor }" class="rect2"></div>
      <div :style="{ backgroundColor: themeColor }" class="rect3"></div>
      <div :style="{ backgroundColor: themeColor }" class="rect4"></div>
      <div :style="{ backgroundColor: themeColor }" class="rect5"></div>
    </div>
  </div>
</template>

<style lang="css">
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  /* background-color: #67cf22; */
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
