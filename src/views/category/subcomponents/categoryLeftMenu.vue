<template>
  <div class="menu">
    <div class="width">
      <Menu theme="light" :active-name="name" width="auto" class="lightmenu">
        <scroll ref="scroll" class="scroll">
          <div v-for="(item, index) in categoryTitle" :key="index" class="menuitem">
            <MenuItem :name="index+1">
              <div @click="maitkeyindex(item.maitKey,index)" class="titles">{{item.title}}</div>
            </MenuItem>
          </div>
        </scroll>
      </Menu>
    </div>
  </div>
</template>

<script>
import Scroll from "components/content/scroll/Scroll";

export default {
  components: {
    Scroll
  },
  data() {
    return {
      name: null
    };
  },
  props: {
    categoryTitle: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    maitkeyindex(maitkey, index) {
      this.$emit("menuvlaue", maitkey, index);
    }
  },
  updated() {
    this.name = 1;
  }
};
</script>

<style scoped>
.width {
  height: 100%;
  width: 110px;
  overflow: hidden;
}
.lightmenu span {
  font-size: 14px;
  font-weight: 700;
}
.scroll {
  height: calc(100vh - 49px - 50px);
}
.menu {
  width: 110px;
  display: inline-block;
}
.menuitem {
  border-bottom: 1px solid rgb(240, 240, 240);
}
.titles{
  padding: 15px;
}
.ivu-menu-item{
  padding: 0;
}
</style>