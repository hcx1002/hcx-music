<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0 hidden lg:block bg-gray-200 dark:bg-[#303031]">
      <Menu/>
    </div>
    <div class="flex-1 flex flex-col">
      <div>
        <Header></Header>
      </div>
      <div class="flex-1 overflow-hidden">
        <ElScrollbar>
          <div class="container mx-auto">
            <RouterView/>
          </div>
        </ElScrollbar>
      </div>
      <div class="h-20">
        <Footer/>
      </div>
    </div>
    <PlayList/>
    <PlayView/>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'
import Footer from "@/components/layout/footer/Footer.vue";
import PlayList from "@/components/layout/playList/PlayList.vue";
import PlayView from '@/components/layout/playView/PlayView.vue'
</script>

<style scoped lang="scss">

</style>
