import Vue from 'vue';
import Router from 'vue-router';

const Homepage = (resolve) => {
    require.ensure(['../components/homepage/Homepage.vue'], () => {
        resolve(require('../components/homepage/Homepage.vue'));
    });
};

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        }
    ]
});
