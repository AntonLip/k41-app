import React from 'react';

import Ads from './Items/Ads/Ads'
import Chat from './Items/Chat/Chat'

const LeftSide = () => {

  return (
    <div class="leftsitebar">
      <Ads itemTitle="Объявления"/>
      <Chat itemTitle="Быстрый чат"/>
    </div>
  )
}

export default LeftSide