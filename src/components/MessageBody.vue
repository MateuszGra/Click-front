<template>
  <div class="message-body">
    <div class="message-meta">
      <a href=":mailto: currentMessage.sender">{{ currentMessage.sender }}</a>
      <h2>{{ currentMessage.name }}</h2>
    </div>
    <!--    <div class="content" v-html="currentMessage.messageBody.content"></div>-->
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
      fetch(`${API_URL}/messages/get-one?id=${newValue}`)
        .then((response) => response.json())
        .then((data) => (this.currentMessage = data.items[0]));
    },
  },
};
</script>

<style scoped lang="scss">
.message-body {
  width: 66%;
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
