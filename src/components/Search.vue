<template>
  <div class="search">
    <input class="search-input" type="search" placeholder="Search message..." />
    <select>
      <option selected value="2">Newest to oldest</option>
      <option value="3">Oldest to newest</option>
      <option value="4">Sender A-Z</option>
      <option value="5">Sender Z-A</option>
      <option value="6">Importance highest to lowest</option>
      <option value="6">Importance lowest to highest</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style scoped lang="scss">
.search {
  padding: 1rem;
  background: var(--background-color);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);

  &-input {
    margin-right: 1rem;
  }
}

input,
select {
  height: 32px;
  border-radius: 4px;
  border: 1px solid #eaecef;
  padding: 6px 12px;

  &:hover {
    border: 1px solid var(--main-color);
  }

  &:focus {
    outline: none !important;
    border: 1px solid var(--main-color);
  }
}
</style>
