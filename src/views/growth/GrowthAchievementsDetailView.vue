<script setup lang="ts">
import { computed } from 'vue'
import AchievementBadgeList from '../../components/growth/AchievementBadgeList.vue'
import { buildGrowthSummary } from '../../features/growth/summary'
import { useStudentAppState } from '../../composables/useStudentAppState'

const { state } = useStudentAppState()

const summary = computed(() => buildGrowthSummary(state))
const earnedCount = computed(() => summary.value.achievements.filter((badge) => badge.earned).length)
</script>

<template>
  <main class="achievement-page">
    <section class="achievement-page__hero-card">
      <div class="achievement-page__eyebrow">Trophy Room</div>
      <div class="achievement-page__medal-sticker">🏆</div>
      <h1 class="achievement-page__title">Achievements Detail</h1>
      <p class="achievement-page__subtitle">Motivational milestones based on participation and consistency.</p>
      <div class="achievement-page__summary-pill">
        {{ earnedCount }} / {{ summary.achievements.length }} unlocked
      </div>
    </section>

    <section class="achievement-page__hero-card achievement-page__board-card">
      <AchievementBadgeList :achievements="summary.achievements" />
    </section>
  </main>
</template>

<style scoped>
.achievement-page {
  margin: 0 auto;
  width: min(760px, 100%);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.achievement-page__hero-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow: hidden;
  border: 4px solid rgba(255, 211, 132, 0.26);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.94);
  padding: 1.5rem;
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.05);
}

.achievement-page__eyebrow {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  border: 2px solid rgba(137, 207, 255, 0.26);
  background: rgba(137, 207, 255, 0.14);
  color: #2B7CB8;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.achievement-page__medal-sticker {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 4px solid #ffffff;
  background: rgba(255, 211, 132, 0.9);
  box-shadow: 0 10px 0 rgba(255, 211, 132, 0.28);
  font-size: 1.8rem;
}

.achievement-page__title {
  margin: 0;
  color: #1A202C;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.achievement-page__subtitle {
  margin: 0;
  max-width: 28rem;
  color: #64748B;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 700;
}

.achievement-page__summary-pill {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1rem;
  border-radius: 9999px;
  background: rgba(168, 230, 207, 0.22);
  color: #065F46;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.achievement-page__board-card {
  gap: 0;
}
</style>
