import { Card } from 'antd'
import React, { useState } from 'react'
import { GridRowOne } from '../GridRowOne'
import { GridRowTwo } from '../GridRowTwo'

const GridController: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>('')

  return (
    <Card hoverable>
      <GridRowOne setSearchInput={setSearchInput} searchInput={searchInput} />

      <GridRowTwo setSearchInput={setSearchInput} />
    </Card>
  )
}

export default GridController
