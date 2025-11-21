/**
 * ================================================================================
 *
 * @project:    @monorepo/tenancy
 * @file:       ~/layers/tenancy/nuxt.config.ts
 * @version:    1.0.0
 * @createDate: 2025 Nov 21
 * @createTime: 19:12
 * @author:     Steve R Lewis
 *
 * ================================================================================
 *
 * @description:
 * TODO: Create description here
 *
 * ================================================================================
 *
 * @notes: Revision History
 *
 * V1.0.0, 20251121-19:12
 * Initial creation and release of nuxt.config.ts
 *
 * ================================================================================
 */

export default defineNuxtConfig({
  compatibilityDate: '2025-10-08',
  devtools: {enabled: true},

  // Extends authentication because it needs access to the user state store
  extends: []
})
