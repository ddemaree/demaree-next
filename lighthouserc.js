module.exports = {
  ci: {
    collect: {
      maxAutodiscoverUrls: 2,
      settings: {
        throttling: { 
          cpuSlowdownMultiplier: 1,
        }
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};