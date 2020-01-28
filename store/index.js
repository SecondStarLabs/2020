import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      repos: [],
      blogPosts: []
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },
      githubRepos(state, repos) {
        state.repos = repos;
      },
      setBlogPosts(state, list) {
        state.blogPosts = list;
      }
    }
  });
};

export default createStore;
