import Page1 from './components/page1/page1'
import Page2 from './components/page2/page2'
import professional from './components/image/professional.jpg'
import professional_2 from './components/image/professional_2.jpg'
import professional_3 from './components/image/professional_3.jpg'
function App() {
  const user = [
    {
      img: professional,
      intro: "",
      tag: "Stisfied"
    },
    {
      img: professional_2,
      intro: "",
      tag: "Underserver"
    },
    {
      img: professional_3,
      imtro: "",
      tag: "  Underbanked"
    }
  ]

  return <div >
    <Page1 users = {user}/>
    <Page2/>
    
  </div>
}

export default App
