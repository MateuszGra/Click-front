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
      <option value="date,desc">Newest to oldest</option>
      <option value="date,asc">Oldest to newest</option>
      <option value="sender,asc">Sender A-Z</option>
      <option value="sender,desc">Sender Z-A</option>
      <option value="name,asc">Name A-Z</option>
      <option value="name,desc">Name Z-A</option>
      <option value="type,desc">Importance highest to lowest</option>
      <option value="type,asc">Importance lowest to highest</option>
    </select>
    <Loader />
  </div>
</template>

<script>
import Loader from './Loader';
export default {
  name: 'Search',
  components: { Loader },
  data() {
    return {
      key: 'date,desc',
      search: '',
    };
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  position: relative;
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
