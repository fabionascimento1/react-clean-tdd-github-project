import React, { useEffect, useState } from 'react'
import FormStatus from '../components/form-status'
import Input from '../components/input'
import Logo from '../components/logo'
import Styles from './index-styles.scss'
import Context from '@/presentation/contexts/form-contexts'
import { Validation } from '../protocols/validation'

type Props = {
  validation: Validation
}

const Index: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    search: '',
    errorMessage: '',
    searchError: 'Campo obrigatório'
  })

  useEffect(() => {
    validation.validate({ search: state.search })
  }, [state.search])

  return (
    <>
      <header className={Styles.header}>
        <Logo />
        <Context.Provider value={ { state, setState } }>
          <form className={Styles.form}>
          <Input type='text' name='search' placeholder='Procurar por repositório ...' />
            <button data-testid='submit' disabled type='submit'>Pesquisar</button>
          </form>
          <FormStatus />
        </Context.Provider>
      </header>
    </>
  )
}

export default Index
