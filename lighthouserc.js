module.exports = {
  ci: {
    collect: {
      maxAutodiscoverUrls: 2,
      settings: {
        preset: "desktop",
        throttling: { 
          cpuSlowdownMultiplier: 0,
        }
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};