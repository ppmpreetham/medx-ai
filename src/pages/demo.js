import React from 'react'
import MedicalHistoryForm from '@/components/form.jsx'
import ImageUploader from '@/components/ImageUploader'
import Pillscheduler from '@/components/Pillscheduler'

const demo = () => {
  return (
    <div className='bg-white h-screen' style={{height: "150vh"}}>
      {/* <MedicalHistoryForm/> */}
     <ImageUploader/>
     <Pillscheduler/>
    </div>

  )
}

export default demo