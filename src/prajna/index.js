/**
 * @fileOverview Prajna plugin
 * @name index.js<src/prajna>
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */

import Vue from 'vue';

const Prajna = {
    install(Vue, options) {
        var prajna = window.Prajna.init({
            pageId: 'homepage'
        });
        if (options && options.middlewares && Array.isArray(options.middlewares) && options.middlewares.length) {
            options.middlewares.forEach(function(middleware) {
                prajna.use(middleware);
            });
        }
        prajna.use(function(ctx, next) {
            console.log(ctx);
            next();
        });
        prajna.start();
        Vue.mixin({
            mounted() {
                console.log('mounted!');
            }
        });

    }
};

export default Prajna;
