import React from 'react'
import Depoimentos from '../depoimentos/Depoimentos'
import Localization from '../localization/Localization'
import Produtos from '../produtos/Produtos'

const Main = () => {
  return (
    <main>
      <Localization />
      <Produtos />
      <Depoimentos />
    </main>
  )
}

export default Main