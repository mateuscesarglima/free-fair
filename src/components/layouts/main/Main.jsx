import React from 'react'
import Depoimentos from '../depoimentos/Depoimentos'
import Feirantes from '../feirantes/Feirantes'
import Localization from '../localization/Localization'
import Produtos from '../produtos/Produtos'

const Main = () => {
  return (
    <main>
      <Localization />
      <Produtos />
      <Depoimentos />
      <Feirantes />
    </main>
  )
}

export default Main