import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    messageID: '',
    search: '',
  },
  mutations: {
    changeMessageID(state, newID) {
      this.state.messageID = newID;
    },
  },
});
