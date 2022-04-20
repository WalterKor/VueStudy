<template>
  <div> 
      <div v-for="user in users" :key="user.id">
          {{ user.name }}
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {    
    created(){
        this.getusers();        
    },
    computed:{
        ...mapState(['users'])
    },
    methods:{
        ...mapActions([ 'getUsers'])
        // getusers(){
        //     this.$store.dispatch('getUsers')
        // }
    }
}
</script>

<style>

</style>