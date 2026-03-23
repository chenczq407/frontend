<script setup lang="ts">
import { computed } from 'vue'
import AchievementBadgeList from '../../components/growth/AchievementBadgeList.vue'
import AdherenceHeatmap from '../../components/growth/AdherenceHeatmap.vue'
import GrowthSummaryCards from '../../components/growth/GrowthSummaryCards.vue'
import PhysicalMetricsPanel from '../../components/growth/PhysicalMetricsPanel.vue'
import { buildGrowthSummary, resolvePhysicalMetricsState } from '../../features/growth/summary'
import { useStudentAppState } from '../../composables/useStudentAppState'

const { state } = useStudentAppState()

const summary = computed(() => buildGrowthSummary(state))
const physicalMetricsState = computed(() => resolvePhysicalMetricsState(state))
</script>

<template>
  <main class="growth-page">
    <header class="growth-page__header">
      <div class="growth-page__eyebrow">Progress Playground</div>
      <h1 class="growth-page__title">Growth Center</h1>
      <p class="growth-page__subtitle">
        Track your training consistency, assessments, and achievements.
      </p>
    </header>

    <GrowthSummaryCards :cards="summary.summaryCards" :latest-assessment="summary.latestAssessment" />

    <section class="growth-page__section growth-page__section-shell">
      <div class="growth-page__section-head">
        <h2 class="growth-page__section-title">Adherence Calendar</h2>
        <RouterLink class="growth-page__link" to="/growth/adherence">View details</RouterLink>
      </div>
      <AdherenceHeatmap :days="summary.adherenceCalendar" />
    </section>

    <section class="growth-page__section growth-page__section-shell">
      <div class="growth-page__section-head">
        <h2 class="growth-page__section-title">Achievements</h2>
        <RouterLink class="growth-page__link" to="/growth/achievements">View details</RouterLink>
      </div>
      <AchievementBadgeList :achievements="summary.achievements" />
    </section>

    <section class="growth-page__section growth-page__section-shell">
      <div class="growth-page__section-head">
        <h2 class="growth-page__section-title">Physical Metrics</h2>
        <RouterLink class="growth-page__link" to="/growth/metrics">View details</RouterLink>
      </div>
      <PhysicalMetricsPanel :metrics-state="physicalMetricsState" />
    </section>
  </main>
</template>

<style scoped>
.growth-page {
  margin: 0 auto;
  width: min(880px, 100%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.75rem 1.25rem 2.5rem;
}

.growth-page__header {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.growth-page__eyebrow {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  border: 2px solid rgba(255, 211, 132, 0.26);
  background: rgba(255, 211, 132, 0.16);
  color: #d97706;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.growth-page__title {
  margin: 0;
  color: #1A202C;
  font-size: 2.4rem;
  letter-spacing: -0.04em;
}

.growth-page__subtitle {
  margin: 0;
  color: #64748B;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 700;
}

.growth-page__section {
  padding: 1.25rem;
}

.growth-page__section-shell {
  border: 4px solid rgba(255, 211, 132, 0.24);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.05);
}

.growth-page__section-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 0.65rem;
}

.growth-page__section-title {
  margin: 0;
  font-size: 1.05rem;
  color: #1A202C;
  font-weight: 900;
}

.growth-page__link {
  color: #2B7CB8;
  font-size: 0.72rem;
  text-decoration: none;
  border-radius: 9999px;
  padding: 0.45rem 0.8rem;
  border: 2px solid rgba(137, 207, 255, 0.26);
  background: rgba(137, 207, 255, 0.12);
  transition: color 160ms ease, background-color 160ms ease, text-decoration-color 160ms ease;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.growth-page__link:hover {
  color: #1A202C;
  background: rgba(255, 211, 132, 0.16);
  text-decoration: underline;
}

.growth-page__link:focus-visible {
  outline: 2px solid #2B7CB8;
  outline-offset: 2px;
  background: rgba(255, 211, 132, 0.16);
  text-decoration: underline;
}
</style>
