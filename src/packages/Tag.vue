<template>
  <div
    class="w-tag"
    ref="tag"
    :class="tagClass"
    :style="{ backgroundColor: color }"
  >
    <slot></slot>
    <span class="close-btn" v-if="closable" @click.stop="handleClose">x</span>
  </div>
</template>

<script>
/**
 * 标签组件
 * @param {closable} boolean 是否可关闭
 * @param {onClose} func 标签关闭时的回调
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */
export default {
  name: "w-tag",
  props: {
    onClose: {
      type: Function,
      default: null,
    },
    color: {
      type: String,
      default: "",
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.onClose && this.onClose();
      this.$refs.tag.style.display = "none";
    },
  },
  computed: {
    tagClass() {
      let classes = [];
      if (this.color) {
        classes.push(`w-tag-has`);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
.w-tag {
  margin-bottom: 8px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 0px 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background-color: #fafafa;
  &-has {
    border-color: transparent;
    color: #fff;
    .close-btn {
      font-family: "黑体";
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .close-btn {
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
  }
}
</style>
