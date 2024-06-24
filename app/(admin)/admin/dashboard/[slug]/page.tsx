import { DashboardUserView } from '@/views/AdminViews'
import React from 'react'

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <DashboardUserView slug={params.slug} />
        </div>
    )
}

export default Page