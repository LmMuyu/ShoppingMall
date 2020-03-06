<template>
  <div id="comment" v-if="Object.keys(comment).length !== 0">
    <div class="user">
      <span>用户评论</span>
      <span class="isdo">更多</span>
    </div>
    <div v-for="(item, index) in comment.list" :key="index" class="isuler">
      <div class="portrait">
        <img :src="item.user.avatar" alt />
      </div>
      <div class="isyun">
        <span class="asss">{{item.user.uname}}</span>
        <span class="created">{{item.created | format}}</span>
      </div>
      <div class="content">
        <p class="isfont">{{item.content}}</p>
        <span v-for="(image, indey) in item.images" :key="indey" class="isimage">
          <img :src="image" alt />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/formatDate";

export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    format(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
#comment {
  margin-top: 3px;
  width: 100%;
  height: auto;
}
.content{
  width: calc(100% - 5.8rem);
  margin: 0 auto
}
.isyun{
  width: 200px;
  height: 48px;
  display: flex;
  flex-direction: column;
}
.isyun span{
  float: left;
}
.portrait {
  
  border-radius: 50%;
  margin: 10px 0 0 10px;
  background-color: #eeeeee;
  float: left;
}
.portrait img {
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.asss {
  font-size:14px;
  padding: 7px 4px;
}
.user {
  width: 100%;
  height: 48px;
  line-height: 48px;
  margin-left: 8px;
  border-bottom: 1px solid #eeeeee;
}
.isdo {
  float: right;
  margin-right: 16px;
}
.isfont {
  font-size: 13px;
}
.isuler {
  border-bottom: 1px solid #eeeeee;
}
.created {
  font-size: 10px;
  padding: 0 4px;
}
.isimage img {
  width: 50px;
  height: 70px;
  padding: 0 5px 0 0
}
</style>