<template>
  <div class="message-body">
    <div v-if="currentMessage.name">
      <div class="message-meta">
        <a :href="`mailto: ${currentMessage.sender}`">{{ currentMessage.sender }}</a>
        <h2>{{ currentMessage.name }}</h2>
      </div>
      <div class="content" v-html="currentMessage.messageBody.content"></div>
    </div>
  </div>
</template>

<script>
import { API_URL } from '../apiconfig';
import { mapState } from 'vuex';

export default {
  name: 'MessageBody',
  data() {
    return {
      currentMessage: {},
    };
  },
  computed: mapState(['messageID']),
  watch: {
    messageID(newValue) {
      this.$store.commit('changeAjaxState', true);
      fetch(`${API_URL}/messages/get-one?id=${newValue}`)
        .then((response) => response.json())
        .then((data) => {
          if (this.$store.state.messageID !== '') {
            this.currentMessage = data.items[0];
          } else {
            this.currentMessage = {};
          }
          this.$store.commit('changeAjaxState', false);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.message-body {
  width: 67%;
  min-height: 100%;
  max-height: 100%;
  border: 1px solid var(--border-color);
  overflow: auto;
  padding: 2rem;
}

.message-meta {
  padding-left: 1rem;
  border-left: 1px solid var(--border-color);
}

.content {
  margin-top: 2rem;
}
</style>
