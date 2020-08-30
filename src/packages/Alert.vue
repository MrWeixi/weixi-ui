<template>
  <div
    class="w-alert"
    :style="{
      opacity: visible ? '1' : '0',
      ...styles,
    }"
    :class="alertClass"
  >
    <div :class="description ? 'w-alert-mes' : ''">{{ message }}</div>
    <span class="close-btn" v-if="closable" @click.stop="handleColse">{{
      closeText ? closable : "x"
    }}</span>
    <div class="w-alert-desc" v-if="description">{{ description }}</div>
  </div>
</template>

<script>
/**
 * 警告提示组件（参数）
 * @param { styles } object 更改Alert样式
 * @param { closable } bool 是否显示关闭按钮,默认不显示
 * @param { closeText } string | vueNode 自定义关闭按钮
 * @param { message } string 警告提示内容
 * @param { description } string 警告提升辅助性文字
 * @param { type } string 警告的类型
 * @param { onClose } func 关闭触发事件
 */
export default {
  name: "w-alert",
  data() {
    return {
      visible: true,
    };
  },
  props: {
    styles: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            "type类型" +
              ["warning", "success", "danger", "info", "primary"].join("、")
          );
        }
        return true;
      },
    },
    closable: {
      type: Boolean,
      default: false,
    },
    closeText: {
      type: String || Element,
    },
    message: {
      type: String,
      default: "",
      validator(type) {
        if (!type) {
          console.error("必须有message");
        }
        return true;
      },
    },
    description: {
      type: String,
      default: "",
    },
    onClose: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleColse() {
      this.visible = false;
      this.onClose && this.onClose();
    },
  },
  computed: {
    alertClass() {
      let classes = [];
      if (this.type) {
        classes.push(`w-alert-${this.type}`);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/common.scss";
$background: #ecf5ff;
.w-alert {
  border-radius: 3px;
  padding: 5px 12px;
  margin-bottom: 16px;
  box-sizing: border-box;
  position: relative;
  background-color: $background;
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  &-mes {
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5em;
  }
  &-desc {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5em;
    word-break: break-all;
  }
  .close-btn {
    position: absolute;
    right: 8px;
    top: 5px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
}
</style>
