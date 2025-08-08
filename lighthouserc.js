// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'https://fastingclock.com',
        'https://fastingclock.com/blog',
      ],
      numberOfRuns: 1,
      // Optional: run as desktop to match your real audience
      settings: {
        formFactor: 'desktop',
        screenEmulation: { mobile: false, disabled: false },
      },
    },
    assert: {
      // Keep truly breaking checks strict, relax/disable noisy "insights"
      assertions: {
        'errors-in-console': ['error', { maxLength: 0 }],
        // Turn off insights that currently fail with 0 by design
        'network-dependency-tree-insight': 'off',
        'dom-size-insight': 'off',
        // Optional: only warn on these
        'max-potential-fid': ['warn', { minScore: 0.05 }],
        // Keep category minimums as warnings (won’t fail CI)
        categories: {
          performance: ['warn', { minScore: 0.9 }],
          seo: ['warn', { minScore: 0.9 }],
          accessibility: ['warn', { minScore: 0.9 }],
          'best-practices': ['warn', { minScore: 0.9 }],
        },
      },
    },
    upload: { target: 'temporary-public-storage' },
  },
};
