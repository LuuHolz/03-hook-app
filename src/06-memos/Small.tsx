import { memo } from 'react';

type SmallProp = {
  value: number;
}

const Small = memo(({ value } : SmallProp) => {
  return (
    <small>{ value }</small>
  )
})

export  { Small }