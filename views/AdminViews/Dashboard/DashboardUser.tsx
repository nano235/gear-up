import { Dashboard, DashboardUserComponent } from '@/components/Admin'
import React from 'react'

const DashboardUser = ({ slug }: { slug: string }) => {
    return (
        <div>
            <DashboardUserComponent slug={slug} />
        </div>
    )
}

export default DashboardUser