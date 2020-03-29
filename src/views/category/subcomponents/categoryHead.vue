<template>
  <div class="head">
    <app-bar :leftspan="5" :centerspan="11" :rightspan="8">
      <div slot="left" class="left">
        <Icon type="ios-menu" size="32" color="#ffffff" class="iosmenu" />
      </div>
      <div slot="center" @click="search">
        <Input icon="ios-search" placeholder="搜索商品" size="default" />
      </div>
      <div slot="right" class="right">
        <Icon type="ios-code-working" size="32" color="#ffffff" class="iosmenu" />
        <Icon type="ios-mail-outline" size="32" class="iosmenu" color="#b2bec3" />
        <Dropdown trigger="click">
          <a href="javascript:void(0)">
            <Icon type="ios-more" size="32" class="iosmenu" color="#e7e7e7" />
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>
              <span @click="favorite">收藏</span>
            </DropdownItem>
            <DropdownItem>点赞</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </app-bar>
  </div>
</template>

<script>
import AppBar from "components/common/appbar/AppBar";

export default {
  components: {
    AppBar
  },
  data() {
    return {};
  },
  methods: {
    search() {
      this.$emit("searchfor");
    },
    favorite() {
      this.$router.replace({
        path: "/file/favorite"
      });
    }
  }
};
</script>

<style scoped>
.iosmenu {
  padding: 2px;
}
.right {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 44px;
}
.left {
  width: 100%;
  height: 44px;
}
</style>