import { Phonebook } from "./components/Phonebook/Phonebook"
import { Toast } from "./components/Toast/Toast"

function App() {
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-between p-8 md:p-24">
      <Phonebook></Phonebook>
      <Toast></Toast>
    </main>
  )
}

export default App
