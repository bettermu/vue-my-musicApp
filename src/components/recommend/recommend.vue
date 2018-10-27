<template>
  <div class="recommend">
    我是推荐页面
  </div>
</template>

<script>
import {getBanners} from 'api/recommend.js'
  export default {
    data(){
      return{
        banners:[]
      }
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




