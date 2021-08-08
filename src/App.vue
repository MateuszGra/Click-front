<template>
  <Header />
  <div class="row">

  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

$base-font-size: 20px !default;
$hd-font-size: 18px;
$mobile-font-size: 16px;

$base-font-family: 'Roboto', sans-serif;
$base-line-height: 1.6 !default;
$base-margin: 1rem !default;

$primary-color: #f37224;
$secondary-color: #f6f6f6;
$base-color: #2c3847;
$background-color: #ffffff;
$border-color: #ccc;

html {
  font-family: $base-font-family;
  font-size: $base-font-size;
  color: $base-color;
  background: $background-color;
}

body {
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-size: 1rem;
  min-height: 100%;
  &.blocked {
    overflow: hidden;
  }
}

@media (max-width: 1600px) {
  html {
    font-size: $hd-font-size;
  }
}

@media (max-width: 1200px) {
  html {
    font-size: $mobile-font-size;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
  font-weight: 300;
  color: #363a3d;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: $base-margin 0;
}

h1 {
  font-size: 1.7rem;
}

h2 {
  font-size: 1.4rem;
}

h3 {
  font-size: 1.2rem;
}

h4 {
  font-size: 1rem;
}

h5 {
  font-size: 0.9rem;
}

h6 {
  font-size: 0.8rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}

.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
