import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    messageID: '',
    search: '',
    filter: 'date,desc',
    ajax: false,
  },
  mutations: {
    changeMessageID(state, newID) {
      this.state.messageID = newID;
    },
    changeSearch(state, search) {
      this.state.search = search;
    },
    changeFilter(state, filter) {
      this.state.filter = filter;
    },
    changeAjaxState(state, boolien) {
      this.state.ajax = boolien;
    },
  },
});
