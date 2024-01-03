import SBgimgsec from '@/Servicecomponent/SBgimgsec'
import SSixdivsec from '@/Servicecomponent/SSixdivsec'
import STwobgsec from '@/Servicecomponent/STwobgsec'
import Saccorsec from '@/Servicecomponent/Saccorsec'
import Smaindivsec from '@/Servicecomponent/Smaindivsec'
import React from 'react'

const service = () => {
    return (
        <div>
            <SBgimgsec />
            <Smaindivsec/>
            <SSixdivsec/>
            <Saccorsec/>
            <STwobgsec/>
        </div>
    )
}
export default service