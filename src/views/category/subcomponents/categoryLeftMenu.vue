<template>
  <div class="menu">
    <div class="width">
      <Menu theme="light" :active-name="name" width="auto" class="lightmenu">
        <scroll ref="scroll" class="scroll">
          <MenuItem v-for="(item, index) in categoryTitle" :key="index" :name="index+1">
            <span @click="cliacktitle(item.maitKey)">{{item.title}}</span>
          </MenuItem>
        </scroll>
      </Menu>
    </div>
  </div>
</template>

<script>
import Scroll from "components/content/scroll/Scroll";

import { getSubcategory } from "network/category";

export default {
  components: {
    Scroll
  },
  data() {
    return {
      name: null,
      category: {
        // isPopular
      }
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
    cliacktitle(maitKey) {
      console.log(maitKey);

      getSubcategory(maitKey).then(res => {
        console.log(res);
      });
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
.menu{
  width: 110px;
  display: inline-block;
}
</style>