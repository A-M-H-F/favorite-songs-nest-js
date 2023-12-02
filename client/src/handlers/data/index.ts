import React from 'react'

export interface ITileState {
    title: string,
}

const dataHandler = {
  onDataChange: (
    setFunction: React.Dispatch<React.SetStateAction<ITileState>>,
    state: ITileState,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = e.target

    // console.log(value)
    // console.log(state)
    setFunction({ ...state, [name]: value })
  }

  //
}

export default dataHandler
