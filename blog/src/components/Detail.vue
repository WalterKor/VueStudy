<template>
    <div>
        <h4>상세페이지</h4>
        <p>{{ blogdata[$route.params.id].title }}</p>
        <p>{{ blogdata[$route.params.id].content }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        blogdata: Array,
    },
};
</script>

<style></style>
