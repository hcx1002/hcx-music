<template>
  <div class="flex items-center justify-between drag h-14">
    <div class="flex items-center pl-5">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button" @click="router.back()"/>
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button"/>
      <div class="search no-drag ml-2">
        <SearchPop/>
      </div>
    </div>
    <div class="flex items-center mr-5">
      <UserInfo/>
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button"/>
      <IconPark :icon="Platte" :stroke-width="2" class="icon-button" @click="changeThemeMode"/>
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-button"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HamburgerButton, Left, Mail, Platte, Right, Search } from '@icon-park/vue-next'
import { useRouter } from "vue-router";
import IconPark from "@/components/common/IconPark.vue";
import UserInfo from "@/components/layout/header/UserInfo.vue";
import { useSearchStore } from "@/stores/search";
import { storeToRefs } from "pinia";
import SearchPop from "@/components/layout/header/SearchPop.vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const iconSize = 22;

const router = useRouter();

const {showSearchView, searchKeyword} = storeToRefs(useSearchStore())
const {setting} = storeToRefs(useUserStore())
if (setting.value?.theme == 'dark')
  window.document.documentElement.classList.add('dark')
else window.document.documentElement.classList.remove('dark')
const changeThemeMode = () => {
  if (setting.value?.theme == 'light') {
    window.document.documentElement.classList.add('dark')
    setting.value.theme = 'dark'
  } else {
    window.document.documentElement.classList.remove('dark')
    setting.value.theme = 'light'
  }
}
</script>
<style lang="scss" scoped>
.search {
  @apply text-xs;
  :deep(.el-input__wrapper) {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
    width: 250px;
  }
}

.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400 ;
}
</style>
