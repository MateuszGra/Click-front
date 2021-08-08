<template>
  <Header />
  <div class="container">
    <search />
    <div class="row">
      <MessageList />
      <MessageBody />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import MessageList from './components/MessageList';
import MessageBody from './components/MessageBody';
import Search from './components/Search';

export default {
  name: 'App',
  components: {
    Header,
    MessageList,
    MessageBody,
    Search,
  },
  created() {},
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

$base-font-size: 20px !default;
$hd-font-size: 18px;
$mobile-font-size: 16px;

$base-font-family: 'Roboto', sans-serif;
$base-line-height: 1.6 !default;
$base-margin: 1rem !default;

:root {
  --border-color: #e6e6e6;
  --font-color: #363a3d;
  --main-color: #6ebe3b;
  --background-color: #f9f9f9;
}

html {
  font-family: $base-font-family;
  font-size: $base-font-size;
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
  color: var(--font-color);
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

a {
  color: var(--font-color);
  text-decoration: none;
  &:hover {
    color: var(--main-color);
  }
}
.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}
</style>
