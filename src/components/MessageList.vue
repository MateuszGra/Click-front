<template>
  <ul class="list">
    <li class="list-item" v-for="message in messageList" :key="message.id" :click="$emit('messageId', message.id)">
      <div class="row align-items-center">
        <img class="list-icon" v-if="message.type < 2" src="../assets/mail.svg" />
        <img class="list-icon" v-else src="../assets/warning.svg" />
        <div>
          <a class="sender" href="mailto: message.sender">{{ message.sender }}</a>
          <p class="subject">{{ message.name }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { API_URL } from '../apiconfig';

export default {
  name: 'MessageList',

  data() {
    return {
      messageList: [],
      content: '',
    };
  },

  methods: {
    fetchMessageList(page, filter, order) {
      fetch(`${API_URL}/messages?page=${page}&filter=${filter}&order=${order}`)
        .then((response) => response.json())
        .then((data) => (this.messageList = data.items));
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
  max-height: 80vh;
  overflow: auto;

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
    border: 1px solid var(--border-color);
    border-bottom: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: var(--background-color);

    &:last-of-type {
      border-bottom: 1px solid var(--border-color);
    }
  }

  .sender {
    font-weight: 300;
    font-size: 0.8rem;
  }

  .subject {
    font-weight: 500;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
}
</style>
