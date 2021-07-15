<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <section class="logo">
        <img src="../assets/logo.png" />
      </section>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/home">
            <a-icon type="user" />
            home
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">
            <a-icon type="video-camera" />
            about
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="scss" scoped>

#components-layout-demo-custom-trigger {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 0 0 16px 0;
    img {
      height: 30px;
    }
  }
}

.ant-layout {
  &-sider{
    height: calc(100vh);
  }
}
</style>
