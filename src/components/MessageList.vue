<template>
  <ul class="list">
    <li
      class="list-item"
      v-for="message in messageList"
      :key="message.id"
      @click="$store.commit('changeMessageID', message.id)"
    >
      <div class="row align-items-center">
        <img class="list-icon" v-if="message.type < 2" src="../assets/mail.svg" />
        <img class="list-icon" v-else src="../assets/warning.svg" />
        <div class="item-meta">
          <a class="sender" href="mailto: message.sender">{{ message.sender }}</a>
          <p class="subject">{{ message.name }}</p>
          <p class="date">{{ changeDateFormat(message.date) }}</p>
        </div>
      </div>
      <Bin @refresh="fetchMessageList(1, 'date', 'asc')" :messageID="message.id" />
    </li>
  </ul>
</template>

<script>
import { API_URL } from '../apiconfig';
import Bin from './Bin';
import { mapState } from 'vuex';

export default {
  name: 'MessageList',
  computed: mapState(['filter', 'search']),
  components: {
    Bin,
  },

  data() {
    return {
      messageList: [],
      content: '',
    };
  },

  watch: {
    filter() {
      this.fetchMessageList();
    },
    search() {
      this.fetchMessageList();
    },
  },

  methods: {
    fetchMessageList() {
      const page = 1;
      const sort = this.$store.state.filter.split(',');
      let url = `${API_URL}/messages?page=${page}&filter=${sort[0]}&order=${sort[1]}`;
      const search = this.$store.state.search;
      if (search !== '') {
        url += `&search=${search}`;
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.messageList = data.items;
          if (data.items.length) {
            this.$store.commit('changeMessageID', data.items[0].id);
          } else {
            this.$store.commit('changeMessageID', '');
          }
        });
    },

    changeDateFormat(dateISOformat) {
      const date = new Date(dateISOformat);
      const month = date.getMonth() + 1;
      const dt = date.getDate();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getDate();
      const secound = date.getSeconds();

      const addZero = (number) => {
        if (number < 10) {
          return `0${number}`;
        }
        return number;
      };

      return `${year}-${addZero(month)}-${addZero(dt)} ${addZero(hour)}:${addZero(minute)}:${addZero(secound)}`;
    },
  },

  created() {
    this.fetchMessageList(1, 'date', 'asc');
  },
};
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 80vh;
  max-height: 80vh;
  overflow: auto;
  width: 33%;
  border: 1px solid var(--border-color);

  &-icon {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #ededed;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &-item {
    position: relative;
    border-bottom: 1px solid var(--border-color);
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: var(--background-color);

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background: #ffffff;
    }
  }

  .sender,
  .date {
    font-weight: 300;
    font-size: 0.8rem;
    margin: 0;
  }

  .subject {
    font-weight: 500;
    font-size: 0.8rem;
    margin: 0.4rem 0;
  }

  .item-meta {
    max-width: calc(100% - 5rem);
  }
}
</style>
