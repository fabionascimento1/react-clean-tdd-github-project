import Context from '@/presentation/contexts/form-contexts'
import React, { useContext } from 'react'
import Styles from './input-styles.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const value = useContext(Context)
  const error = value['searchError']

  const getStatus = (): string => {
    return '🔴'
  }
  const getTitle = (): string => {
    return error
  }
  return (
    <div className={Styles.inputWrap}>
       <input {...props} />
       <span title={getTitle()} data-testid='search-status' className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
