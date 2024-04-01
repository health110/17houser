<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DoorIcon from './icons/IconDoor.vue'
import CupboardIcon from './icons/IconCupboard.vue'
import SkirtingLineIcon from './icons/IconSkirtingLine.vue'
import WaterBasinIcon from './icons/IconWaterBasin.vue'
// import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="home-box">
    <RouterLink to="door" class="home-box__item">
      <WelcomeItem>
        <template #icon>
          <DoorIcon />
        </template>
        <template #heading>门</template>
      </WelcomeItem>
    </RouterLink>
    <RouterLink to="/cupboard" class="home-box__item">
      <WelcomeItem>
        <template #icon>
          <CupboardIcon />
        </template>
        <template #heading>柜子</template>
      </WelcomeItem>
    </RouterLink>
    <RouterLink to="/skirtingLine" class="home-box__item">
      <WelcomeItem>
        <template #icon>
          <SkirtingLineIcon />
        </template>
        <template #heading>踢脚线</template>
      </WelcomeItem>
    </RouterLink>
    <RouterLink to="/waterBasin" class="home-box__item">
      <WelcomeItem>
        <template #icon>
          <WaterBasinIcon />
        </template>
        <template #heading>洗菜盆</template>
      </WelcomeItem>
    </RouterLink>
  </div>
</template>
<style lang="less">
.home-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  height: 2.4rem;
  &__item {
    text-align: center;
    flex: 1;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
