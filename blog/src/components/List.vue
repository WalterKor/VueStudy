<template>
    <div class="contents">
        <h1>리스트페이지입니다.</h1>
        <div v-for="(a, i) in blogdata" :key="a">
            <h5>{{ blogdata[i].title }}</h5>
            <p>{{ blogdata[i].content }}</p>
            <p>{{ blogdata[i].date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        blogdata: Array,
    },
    data() {},
};
</script>

<style>
.contents div {
    text-align: center;
}
</style>
