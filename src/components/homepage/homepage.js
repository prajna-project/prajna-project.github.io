import Navigation from '../navigation/Navigation.vue';
// let cursor = 0;

export default {
    name: 'Homepage',
    components: {
        'navigation': Navigation
    },
    computed: {
        prevCursor: function () {
            if (this.cursor === 0) {
                return 5;
            } else {
                return (this.cursor - 1) % 6;
            }
        },
        nextCursor: function () {
            return (this.cursor + 1) % 6;
        }
    },
    data () {
        return {
            cursor: 0,
            lang: ['Prajna', '般若', '반야', 'Праджня', 'براجنا', 'Prajñā']
        };
    },
    created () {
        const self = this;
        setInterval(function () {
            self.cursor += 1;
            if (self.cursor === 6) {
                self.cursor = 0;
            }
        }, 5000);
    } 
};
