<template>
  <view class="training-shell">
    <view class="training-shell__halo training-shell__halo--coral" />
    <view class="training-shell__halo training-shell__halo--teal" />
    <view class="training-shell__inner">
      <slot />
    </view>
  </view>
</template>

<style scoped>
.training-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #FCF7F0;
  padding: 48rpx 32rpx 72rpx;
}

.training-shell__halo {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}

.training-shell__halo--coral {
  top: -80rpx;
  right: -24rpx;
  width: 220rpx;
  height: 220rpx;
  background: rgba(255, 139, 139, 0.16);
}

.training-shell__halo--teal {
  top: 300rpx;
  left: -64rpx;
  width: 184rpx;
  height: 184rpx;
  background: rgba(137, 207, 255, 0.18);
}

.training-shell__inner {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  display: flex;
  max-width: 840px;
  flex-direction: column;
  gap: 24rpx;
}
</style>
