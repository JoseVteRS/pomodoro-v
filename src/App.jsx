
import 'react-circular-progressbar/dist/styles.css';
import { CogIcon } from './components/Icons';
import { MainPage } from "./components/Pages/Main";

function App() {
  return (
    <>
      <main className="bg-mesh-dark" >
        <nav className='h-20'>
          <div className="flex items-center justify-between p-5">
            <div className='flex-1 text-primary font-semibold text-lg'>HardFocus</div>
            <button className="text-gray-light" >
              <CogIcon />
            </button>
          </div>
        </nav>

        <section className="h-[calc(100vh-5rem)]">
          <MainPage />
        </section>
      </main>

    </>
  )
}

export default App
