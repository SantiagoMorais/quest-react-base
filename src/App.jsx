import './App.css'
import Text from './assets/components/paragraph/paragraph.jsx'
import Buttons from './assets/components/buttons/buttons.jsx'

function App() {
  return (
    <>
      <h2 className="title">
        Quest React Base
      </h2>
      <h3>Desafio 1</h3>
      <Text
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni pariatur? Eum esse voluptate pariatur sed assumenda nulla aut voluptatum deserunt, laborum consectetur recusandae quod non fugiat hic? Ratione, cum!'}
        setTextColor={'#fff'}
      />
      <h3>Desafio 2</h3>
      <Buttons />
    </>
  )
}

export default App
