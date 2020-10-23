import React from 'react'
import { removeModal } from '../../../../assets/js/noWordsFound';

const NoWordsModal = () => {
  return (
    <div className='no-words-modal box box-silver-2'>
      <div className="no-words-container">
        <h3 className='text-silver-2'>You have no words or words are still fetching</h3>
        <button className='btn btn-silver' onClick={removeModal}>Add your first word</button>
      </div>
    </div>
  )
}

export default NoWordsModal

