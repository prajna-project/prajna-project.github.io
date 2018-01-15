import Vue from 'vue';
import Router from 'vue-router';

const Homepage = (resolve) => {
    require.ensure(['../components/homepage/Homepage.vue'], () => {
        resolve(require('../components/homepage/Homepage.vue'));
    });
};

Vue.use(Router);

const appRouter = new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        }
    ]
});

appRouter.afterEach(function (to, from, ) {
    switch(to.name) {
    case 'Homepage': 
        Vue.prajna.set({
            pageId: 'home-page'
        });
        // Vue.prajna.pageView();
        break;
    case 'DEMO': 
        Vue.prajna.set({
            pageId: 'demo-page'
        });
        // Vue.prajna.pageView();
        break;
    default:
        break;
    };
});

export default appRouter;
