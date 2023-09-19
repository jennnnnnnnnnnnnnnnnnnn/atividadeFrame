import { useState, useEffect } from 'react'
import './App.css'
import Card from './componentes/card'
import TournamentBracket from '../src/componentes/TournamentBracket/index'

function Projeto() {

  const [ activeTab, setActiveTab ] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch(activeTab) {
      case 'Tab 1':
        return <TournamentBracket tipo='roupas' />
      case 'Tab 2':
        return <TournamentBracket tipo='eletronicos' />
      case 'Tab 3':
        return <TournamentBracket tipo='comidas' />
      case 'Tab 4':
        return <TournamentBracket tipo='carros' />
      case 'Tab 5':
        return <section className='cards'><Card /></section>
    }
  }

  return (
    <>
      <h1>Marcas</h1>
      
      <section className='knockout_table'>
        
        <div className='tabs'>
          <button
            className={ activeTab === 'Tab 1' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 1')}
          >
            roupas
          </button>
          <button
            className={ activeTab === 'Tab 2' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 2')}
          >
            comidas
          </button>
          <button
            className={ activeTab === 'Tab 3' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 3')}
          >
            eletronicos
          </button>
          <button
            className={ activeTab === 'Tab 4' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 4')}
          >
            carros
          </button>
          <button
            className={ activeTab === 'Tab 5' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 5')}
          >
            Grupos
          </button>
        </div>

        <div className='tab_content'>
          { renderTabContent() }
        </div>

      </section>

    </>
  )
}




export default Projeto
