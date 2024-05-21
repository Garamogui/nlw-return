import { PopoverButton } from "@headlessui/react"
import { X } from "phosphor-react"

export const CloseButton = () => {
  return (
    <PopoverButton className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100">
      <X className="h-4 w-4" weight="bold" />
    </PopoverButton>
  )
}

