import GlobalApi from '@/utils/GlobalApi'
import React from 'react'

export const HomePage = async() => {
    const homepageData = await GlobalApi.getHomePageData()
    console.log(homepageData)
  return (
    <div>HomePage</div>
  )
}
