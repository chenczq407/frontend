<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { CheckpointKey } from '../../types/student'
import { evaluateLongQuestionnaire, type LongQuestion } from '../../features/access/questionnaire'
import { getRatingOptionClasses } from '../../features/questionnaire/ratingOptionStyles'

interface Props {
  checkpoint: CheckpointKey
  questions: LongQuestion[]
}

interface SubmissionPayload {
  responses: Record<string, number>
  score: number
  percentage: number
  submittedAt: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  submit: [payload: SubmissionPayload]
}>()

const responses = reactive<Record<string, number>>({})

for (const question of props.questions) {
  responses[question.id] = 0
}

const isComplete = computed(() => Object.values(responses).every((value) => value > 0))

function handleSubmit() {
  if (!isComplete.value) {
    return
  }

  const result = evaluateLongQuestionnaire(props.checkpoint, { ...responses })
  emit('submit', {
    responses: result.responses,
    score: result.score,
    percentage: result.percentage,
    submittedAt: result.submittedAt
  })
}

function handleResponseChange(questionId: string, value: number) {
  responses[questionId] = value
}

function optionClasses(isSelected: boolean) {
  return getRatingOptionClasses(isSelected, 'gold')
}
</script>

<template>
  <form class="flex flex-col gap-[32rpx]" @submit.prevent="handleSubmit">
    <view
      v-for="question in questions"
      :key="question.id"
      class="bg-white rounded-[32rpx] p-[40rpx] border-4 border-brand-gold/20 chunky-shadow"
    >
      <text class="block text-[36rpx] font-800 text-[#1A202C] leading-snug mb-[32rpx] tracking-tight">{{ question.prompt }}</text>
      
      <view class="flex items-center justify-between gap-[12rpx]">
        <view v-for="value in 5" :key="value"
          class="relative flex flex-col items-center gap-[12rpx] flex-1"
          @click="handleResponseChange(question.id, value)"
        >
          <view class="rating-option rating-option--circle mx-auto" :class="optionClasses(responses[question.id] === value)">
            {{ value }}
          </view>
        </view>
      </view>
    </view>

    <view class="mt-[32rpx] pb-[48rpx]">
      <button form-type="submit" class="btn-primary" :disabled="!isComplete">
        <text v-if="!isComplete">Complete all questions First</text>
        <text v-else>Submit Answers ✨</text>
      </button>
    </view>
  </form>
</template>

<style scoped>
@import '../../features/questionnaire/ratingOptionStyles.css';
</style>
