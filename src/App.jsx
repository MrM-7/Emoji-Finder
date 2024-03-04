import Container from "./components/Container"
import Footer from "./components/Footer"
import Search from "./components/Search"

function App() {

  return (
    <div className="min-h-screen w-full bg-slate-900">
      <Container>
        <Search />
        <Footer />
      </Container>
    </div>
  )
}

export default App
