<template>
    <div>
        <div class="home-page">
            <div class="prajna-text-prev bu"><span>{{lang[prevCursor]}}</span></div>
            <div class="prajna-text en"><span>{{lang[cursor]}}</span></div>
            <div class="prajna-text-next ch"><span>{{lang[nextCursor]}}</span></div>
        </div>
        <navigation :cursor="cursor"></navigation>
    </div>
</template>

<script type="text/javascript" src="./homepage.js"></script>

<style scoped>
    @import './homepage.css';
</style>
