<template>
    <div class="navigation">
        <p><a class="demo" href="//">{{nav[cursor]['demo']}}</a></p>
        <p><a class="doc" href="https://github.com/prajna-project/prajna/wiki">{{nav[cursor]['wiki']}}</a></p>
        <p><a class="mail" href="mailto:youngleemails@gmail.com">{{nav[cursor]['mail']}}</a></p>
    </div>
</template>

<script type="text/javascript" src="./navigation.js"></script>

<style scoped>
    @import './navigation.css';
</style>
