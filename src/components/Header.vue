<template>
  <header class="header">
    <div class="container">
      <div class="row left-col">
        <svg class="header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="ico_inbox">
          <path class="eist2" d="M80.7 36.7L97 48v42.9c0 3.4-2.7 6.1-6.1 6.1H9.1C5.7 97 3 94.3 3 90.9V48l16.3-11.2" />
          <path
            class="eist2"
            d="M15.3 84.7l20.4-16.3h28.6l20.4 16.3M97 48L72.5 64.3M3 48l24.5 16.3M80.7 58.9V3H19.3v55.7M31.6 15.3h8.2M39.8 27.5h28.6M31.6 39.8h36.8M31.6 52h36.8"
          />
        </svg>
        <h1>Messages</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.header {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-color);

  &-icon {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0.4rem 1.25rem 0.4rem 0;
    stroke-width: 5;
  }
}

.eist2 {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  color: var(--main-color);
}

.left-col {
  width: 34%;
}

.roght-col {
  width: 66%;
}
</style>
