import React from 'react'

export default () => {
  const { DEPLOY_PRIME_URL } = process.env
  return <div>
    Deploy URL: {DEPLOY_PRIME_URL || "None"}
  </div>
}