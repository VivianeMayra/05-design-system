import * as ToastPrimitive from "@radix-ui/react-toast"
import { ComponentProps } from "../../types/ComponentProps"
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from "./styles"
import { X } from "phosphor-react"

export type ToastProps = ComponentProps<typeof ToastPrimitive.Root> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = "Toast"
