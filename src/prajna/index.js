/**
 * @fileOverview Prajna plugin
 * @name index.js<src/prajna>
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */

import Vue from 'vue';

let installed = false;
const NAME = "Young Lee";
let A_FLAG = true;

var aMiddleware = function(ctx, next) {
    // ctx.defineGetter('younglee-name', NAME);
    if (A_FLAG) {
        A_FLAG = false;
        ctx.core.younglee = function (msgString) {
            ctx.core.report({
                level: 'INFO',
                name: 'prajna-younglee-record',
                content: msgString
            });
        };
    }
    next();
};

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
        // if (options && options.middlewares && Array.isArray(options.middlewares) && options.middlewares.length) {
        //     options.middlewares.forEach(function(middleware) {
        //         prajna.use(middleware);
        //     });
        // }
        prajna.use(aMiddleware);
        prajna.start();
        prajna.younglee('Hello, Prajna!');
        Vue.prajna = prajna;
    }
};

export default Prajna;
