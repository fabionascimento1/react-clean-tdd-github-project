import React, { useState } from 'react'
import FormStatus from '../components/form-status'
import Input from '../components/input'
import Logo from '../components/logo'
import Styles from './index-styles.scss'
import Context from '@/presentation/contexts/form-contexts'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Index: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <>
      <header className={Styles.header}>
        <Logo />
        <Context.Provider value={state}>
          <form className={Styles.form}>
          <Input type='text' name='repository' placeholder='Procurar por repositório ...' />
            <button data-testid='submit' disabled type='submit'>Pesquisar</button>
          </form>
          <FormStatus />
        </Context.Provider>
      </header>
    </>
  )
}

export default Index
