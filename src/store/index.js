import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    messageID: '',
  },
  mutations: {
    changeMessageID(state, newID) {
      this.state.messageID = newID;
    },
  },
});
