import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      repos: []
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },
      githubRepos(state, repos) {
        state.repos = repos;
      }
    }
  });
};

export default createStore;
