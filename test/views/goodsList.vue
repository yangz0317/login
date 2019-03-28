<template>
  <div>
      这是商品列表页面
      <span>{{$route.params.id}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num:0
        } 
    }
}
</script>