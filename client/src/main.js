import { createApp } from 'vue';
/* import { createRouter, createWebHistory } from 'vue-router'; */
import { createStore } from 'vuex';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient, ApolloProvider } from '@vue/apollo-composable';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

const httpLink = createHttpLink({
  //uri: 'http://localhost:4000/api'
  uri: "https://burger-queen-project-chxctwnpbw.now.sh/graphql"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(DefaultApolloClient);
app.provide(ApolloClient, apolloClient);

app.mount('#app');
