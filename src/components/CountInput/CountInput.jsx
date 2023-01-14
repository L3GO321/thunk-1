import { useState } from "react"
import { changeCount } from "../../utils/store/facts/factsSlice"

import { useDispatch } from "react-redux"

export const CountInput = () => {
  const [value, setValue] = useState(0)

  const dispatch = useDispatch()

  const onChangeCount = (e) => {
    const value = e.target.value
    setValue(value)
    dispatch(changeCount(value))
  }

  return (
    <label>
      Количество фактов:
      <input
        type='number'
        min='0'
        max='5'
        value={value}
        onChange={onChangeCount}
      />
    </label>
  )
}
