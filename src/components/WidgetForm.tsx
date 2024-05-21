import { CloseButton } from "@headlessui/react"

import bugImageUrl from '/assets/bug-figmoji.svg'
import ideaImageUrl from '/assets/idea-figmoji.svg'
import otherImageUrl from '/assets/other-figmoji.svg'

const feedbacktypes = {
  BUG: {
    title: 'Problema', 
    image:{
      source: bugImageUrl,
      alt: ''
    }

  },
  IDEA: {
    title: 'Ideia', 
    image:{
      source: ideaImageUrl,
      alt: ''
    }

  },
  OTHER: {
    title: 'Outro', 
    image:{
      source: otherImageUrl,
      alt: ''
    }
  },
  
}

export const WidgetForm = () => {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className="text-xl leading-6 ">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbacktypes).map(([key, value]) => {
          return (
          <button>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )

        })}
      </div>

      <footer>
        Feito com ❤ pela <a className="underline underline-offset-2" href="https://tolearn.com.br">to<b>Learn</b></a>

      </footer>
    </div>
  )
}

