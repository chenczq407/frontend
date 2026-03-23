<script setup lang="ts">
defineProps<{
  chip: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <view class="access-entry">
    <view class="access-entry__halo access-entry__halo--gold" />
    <view class="access-entry__halo access-entry__halo--teal" />

    <view class="access-entry__inner">
      <view class="access-entry__hero">
        <view class="access-entry__hero-badge">
          <text class="access-entry__hero-emoji">🎯</text>
        </view>

        <view class="access-entry__title-card">
          <view class="access-entry__title-top">
            <view class="access-entry__chip-pill">
              <text>{{ chip }}</text>
            </view>
            <view class="access-entry__spark-pill">
              <text>Play Mode</text>
            </view>
          </view>

          <text class="access-entry__title">
            {{ title }}
          </text>
          <text class="access-entry__subtitle">
            {{ subtitle }}
          </text>
        </view>
      </view>

      <view class="access-entry__body">
        <slot />
      </view>
    </view>
  </view>
</template>

<style scoped>
.access-entry {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #FCF7F0;
  padding: 56rpx 48rpx 120rpx;
  color: #1A202C;
}

.access-entry__halo {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}

.access-entry__halo--gold {
  top: -72rpx;
  right: -24rpx;
  width: 220rpx;
  height: 220rpx;
  background: rgba(255, 211, 132, 0.28);
}

.access-entry__halo--teal {
  top: 260rpx;
  left: -64rpx;
  width: 184rpx;
  height: 184rpx;
  background: rgba(137, 207, 255, 0.2);
}

.access-entry__inner {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  display: flex;
  max-width: 720px;
  flex-direction: column;
  gap: 40rpx;
}

.access-entry__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32rpx;
  text-align: center;
}

.access-entry__hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 164rpx;
  height: 164rpx;
  border: 8rpx solid #ffffff;
  border-radius: 9999px;
  background: linear-gradient(180deg, #FFD384 0%, #FFC46A 100%);
  box-shadow: 0 14rpx 0 rgba(255, 211, 132, 0.35);
}

.access-entry__hero-emoji {
  font-size: 72rpx;
}

.access-entry__title-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
  padding: 40rpx 36rpx;
  border: 8rpx solid rgba(255, 211, 132, 0.35);
  border-radius: 48rpx;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12rpx 0 rgba(0, 0, 0, 0.05);
}

.access-entry__title-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16rpx;
}

.access-entry__chip-pill,
.access-entry__spark-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12rpx 24rpx;
  border-radius: 9999px;
  font-size: 24rpx;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.access-entry__chip-pill {
  border: 4rpx solid rgba(255, 211, 132, 0.3);
  background: rgba(255, 211, 132, 0.18);
  color: #D97706;
}

.access-entry__spark-pill {
  border: 4rpx solid rgba(137, 207, 255, 0.3);
  background: rgba(137, 207, 255, 0.14);
  color: #2B7CB8;
}

.access-entry__title {
  display: block;
  font-size: 72rpx;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
}

.access-entry__subtitle {
  display: block;
  color: #64748B;
  font-size: 40rpx;
  line-height: 1.45;
  font-weight: 800;
}

.access-entry__body {
  position: relative;
  z-index: 1;
}
</style>
