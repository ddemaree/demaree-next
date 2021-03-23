module.exports = {
  ci: {
    collect: {
      maxAutodiscoverUrls: 8,
      settings: {
        "throttling.cpuSlowdownMultiplier": 2,
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};