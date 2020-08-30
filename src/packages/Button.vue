<template>
  <button class="w-button ripple" :class="btnClass">
    <w-icon :icon="icon" class="icon" v-if="icon&&!loading"></w-icon>
    <w-icon icon="loading" class="icon" v-if="loading"></w-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "w-button",
  props: {
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
    icon: {
      type: String
    },
    shape:{
        type:String,
        default:'radius',
        validator(type) {
        if (type && !["radius", "circle"].includes(type)) {
          console.error("type类型必须为" + ["radius", "circle"].join("、"));
        }
        return true;
      },
    },
   block:{
        type:Boolean,
        default:false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (type && !["left", "right"].includes(type)) {
          console.error("type类型必须为" + ["left", "right"].join("、"));
        }
        return true;
      },
    },
    loading:{
        type:Boolean,
        default:false
    }
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`w-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`w-button-${this.iconPosition}`);
      }
      if(this.shape){
        classes.push(`w-button-${this.shape}`);
      }
      if(this.block){ //适应父元素
          classes.push(`w-button-block`)
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/common.scss";
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.w-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  user-select: none; //禁止用户选中
  color: $color;
  background: #fff;
  cursor: pointer;
  font-size: $font-size;
  padding: 8px 1em;
 text-align: center;
 box-sizing: border-box;
  display: inline-block;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }

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
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  .icon + span {
    margin-right: 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
  }
  &-block{
      display: block;
      width: 100%;
  }
  &-circle{
      border-radius: 1.5em;
  }
}
.ripple {
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 11%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(12, 12);
    opacity: 0;
    transition: transform .6s, opacity .6s;
  }
  &:active::after {
    transform: scale(0, 0);
    opacity: .3;
    //设置初始状态
    transition: 0s;
  }
}
</style>
