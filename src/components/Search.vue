<template>
  <div class="search">
    <input
      v-model="search"
      class="search-input"
      type="search"
      placeholder="Search message..."
      @keyup="$store.commit('changeSearch', search)"
    />
    <select v-model="key" @change="$store.commit('changeFilter', key)">
      <option selected value="date,asc">Newest to oldest</option>
      <option value="date,desc" selected>Oldest to newest</option>
      <option value="sender,asc">Sender A-Z</option>
      <option value="sender,desc">Sender Z-A</option>
      <option value="name,asc">Name A-Z</option>
      <option value="name,desc">Name Z-A</option>
      <option value="type,desc">Importance highest to lowest</option>
      <option value="type,asc">Importance lowest to highest</option>
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
