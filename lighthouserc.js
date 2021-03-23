module.exports = {
  ci: {
    collect: {
      maxAutodiscoverUrls: 2,
      settings: {
        throttling: { 
          cpuSlowdownMultiplier: 2,
        }
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};