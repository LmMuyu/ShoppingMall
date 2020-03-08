<template>
  <div class="menu">
    <div class="width">
      <Menu theme="light" width="110px" class="lightmenu">
        <scroll ref="scroll" class="scroll">
          <MenuItem :name="index+1" v-for="(item, index) in categoryTitle" :key="index">
            <span class="titlese">{{item.title}}</span>
          </MenuItem>
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
    return {};
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
    cliacktitle() {
      console.log(123456);
    }
  }
};
</script>

<style scoped>
.width {
  height: 100%;
  width: 110px;
  visibility: visible;
}
.lightmenu span {
  font-size: 14px;
  font-weight: 700;
}
.scroll {
  height: calc(100vh - 49px - 50px);
}
/* .titlese {
  position: relative;
  z-index: -99;
} */
</style>