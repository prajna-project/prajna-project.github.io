/**
 * @fileOverview Prajna plugin
 * @name index.js<src/prajna>
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */

import Vue from 'vue';

let installed = false;

const Prajna = {
    install(Vue, options) {
        if (installed) {
            console.error('prajna plugin has already been installed. Vue.use() should be called only once.');
            return;
        }
        installed = true;
        var prajna = window.Prajna.init({
            pageId: 'homepage',
            channel: 'browser'
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
        Vue.prajna = prajna;
    }
};

export default Prajna;
