export default {
    name: 'Navigation',
    props: ['cursor'],
    data () {
        return {
            nav: [{demo: "Demo", wiki: "Wiki", mail: "Contact"},
                  {demo: "样例", wiki: "文档", mail: "开发者"},
                  {demo: "데모", wiki: "위키", mail: "접촉"},
                  {demo: "демонстрация", wiki: "вики", mail: "контакт"},
                  {demo: "برهنة", wiki: "ويكي", mail: "اتصل"},
                  {demo: "demostración", wiki: "wiki", mail: "contacto"}]
        };
    },
    created () {
    }
};
