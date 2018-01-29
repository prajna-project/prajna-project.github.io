<template>
    <div class="navigation">
        <a class="demo" href="//">{{nav[cursor]['demo']}}</a>
        <a class="doc" href="https://github.com/prajna-project/prajna/wiki">{{nav[cursor]['wiki']}}</a>
        <a class="mail" href="mailto:youngleemails@gmail.com">{{nav[cursor]['mail']}}</a>
    </div>
</template>

<script type="text/javascript" src="./navigation.js"></script>

<style scoped>
    @import './navigation.css';
</style>
