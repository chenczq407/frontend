<script setup lang="ts">
import TrainingModeCard from '../../../components/training/TrainingModeCard.vue'
import type { TrainingModality } from '../../../domain/student/types'
import UniTrainingPageShell from '../../components/training/UniTrainingPageShell.vue'

function chooseMode(modality: TrainingModality) {
  if (modality === 'stair') {
    void uni.navigateTo({
      url: '/pages/training/stair-session'
    })
    return
  }

  void uni.navigateTo({
    url: `/pages/training/visual-session?modality=${modality}`
  })
}
</script>

<template>
  <UniTrainingPageShell>
    <view class="card-shell select-page__hero-card">
      <view class="select-page__hero-tag">
        <text>Session Arcade</text>
      </view>
      <view class="select-page__hero-sticker">
        <text>🎮</text>
      </view>
      <text class="section-title">Pick your session</text>
      <text class="select-page__hero-copy text-17 leading-7 text-slate-600">
        Choose one playful training mode. Each card should feel like a mini game, not a bland form step.
      </text>
    </view>

    <TrainingModeCard
      accent-class="bg-brand-coral/16 text-brand-coral"
      description="Camera-guided martial movement with split-screen feedback."
      modality="wushu"
      title="Wushu"
      @choose="chooseMode"
    />
    <TrainingModeCard
      accent-class="bg-brand-gold/22 text-brand-ink"
      description="Fast, rhythmic intervals with live camera placeholders."
      modality="hiit"
      title="HIIT"
      @choose="chooseMode"
    />
    <TrainingModeCard
      accent-class="bg-brand-teal/16 text-brand-ink"
      description="A 30-second motion-sensor burst for stair-climbing practice."
      modality="stair"
      title="Stair-climbing"
      @choose="chooseMode"
    />
  </UniTrainingPageShell>
</template>

<style scoped>
.select-page__hero-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  overflow: hidden;
}

.select-page__hero-tag {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 12rpx 24rpx;
  border-radius: 9999px;
  border: 4rpx solid rgba(137, 207, 255, 0.26);
  background: rgba(137, 207, 255, 0.14);
  color: #2B7CB8;
  font-size: 24rpx;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.select-page__hero-sticker {
  position: absolute;
  top: 28rpx;
  right: 28rpx;
  display: inline-flex;
  width: 112rpx;
  height: 112rpx;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 6rpx solid #ffffff;
  background: rgba(255, 211, 132, 0.9);
  box-shadow: 0 12rpx 0 rgba(255, 211, 132, 0.28);
  font-size: 52rpx;
}

.select-page__hero-copy {
  display: block;
  max-width: 520rpx;
  color: #64748B;
  font-size: 32rpx;
  line-height: 1.55;
  font-weight: 700;
}
</style>
