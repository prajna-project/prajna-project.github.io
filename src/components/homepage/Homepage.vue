<template>
    <div>
        <div class="home-page">
            <p class="prajna-text-prev bu">{{lang[prevCursor]}}</p>
            <p class="prajna-text en">{{lang[cursor]}}</p>
            <p class="prajna-text-next ch">{{lang[nextCursor]}}</p>
        </div>
        <navigation :cursor="cursor"></navigation>
    </div>
</template>

<script type="text/javascript" src="./homepage.js"></script>

<style scoped>
    @import './homepage.css';
</style>
