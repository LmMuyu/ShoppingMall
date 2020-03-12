<template>
  <div id="godosinfo">
    <div class="describe">
      <span class="isdesc">{{desc.desc}}</span>
    </div>
    <span class="image" v-for="(item, index) in detailImage" :key="index">
      <img v-lazy="item" @load="images" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    detailImage: {
      type: Array,
      default() {
        return [];
      }
    },
    desc: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      image: 0,
      isdetailImage: 0
    };
  },
  methods: {
    images() {
      this.$emit("isimage");
    }
  },
  watch: {
    detailImage() {
      this.isdetailImage = this.detailImage.length;
    },
    deep: true
  }
};
</script>

<style scoped>
#godosinfo {
  margin-top: 3px;
}
.isdesc {
  text-align: left;
}
.describe {
  font: 0.875rem sans-serif;
  width: 100%;
  height: 6.875rem;
  word-wrap: break-word;
  background-color: #ffffff;
}
.image {
  margin-top: 50px;
}
.image img {
  width: 100%;
  height: auto;
}
</style>