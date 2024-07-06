import { TransactionDetailsView } from '@/views/UserDashboardViews'
import React from 'react'

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <TransactionDetailsView slug={params.slug} />
    </div>
  )
}

export default Page