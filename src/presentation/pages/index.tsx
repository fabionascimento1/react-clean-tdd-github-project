import React from 'react'
import FormStatus from '../components/form-status'
import Input from '../components/input'
import Logo from '../components/logo'
import Styles from './index-styles.scss'

const Index: React.FC = () => {
  return (
    <>
      <header className={Styles.header}>
        <Logo />
        <form className={Styles.form}>
         <Input type='text' name='repository' placeholder='Procurar por repositório ...' />
          <button type='submit'>Pesquisar</button>
        </form>
        <FormStatus />
      </header>
    </>
  )
}

export default Index
