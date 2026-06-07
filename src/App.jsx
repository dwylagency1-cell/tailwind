import Page1 from './components/page1/page1'
import Page2 from './components/page2/page2'
import professional from './components/image/professional.jpg'
import professional_2 from './components/image/professional_2.jpg'
import professional_3 from './components/image/professional_3.jpg'
function App() {
  const user = [
    {
      img: professional,
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem accusantium libero molestiae exercitationem numquam nihil magnam tempore?",
      tag: "Stisfied"
    },
    {
      img: professional_2,
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum inventore accusantium vero vitae consectetur tempora.",
      tag: "Underserver"
    },
    {
      img: professional_3,
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore dignissimos nobis ad repellat sit!",
      tag: "  Underbanked"
    }
  ]

  return <div >
    <Page1 users = {user}/>
    
  </div>
}

export default App
