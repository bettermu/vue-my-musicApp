<template>
  <div class="recommend">
    我是推荐页面 {{getPlayMode}}
  </div>
</template>

<script>
import {getBanners} from 'api/recommend.js'
import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        banners:[]
      }
    },
    computed:{
      ...mapGetters(['getPlayMode'])
    },
    created(){
      this._getBanners()
    },
    methods:{
      _getBanners(){
        getBanners().then((res)=>{
          console.log(res.data)
        })
      }
    }
  };
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';


  


</style>




