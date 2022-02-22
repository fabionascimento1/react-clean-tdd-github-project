import React from 'react'
import Input from '../components/input'
import Logo from '../components/logo'
import Spinner from '../components/spinner'
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
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.Spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </header>
    </>
  )
}

export default Index
