import React, { useContext } from 'react'
import Spinner from '../spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form-contexts'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.Spinner} /> }
      { errorMessage && <span className={Styles.error}>Error</span> }
    </div>
  )
}

export default FormStatus
