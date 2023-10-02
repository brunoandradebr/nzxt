import React from 'react'

export interface IDialogProps {
  children?: React.ReactNode
  open?: boolean
  title?: string
  confirmLabel?: string
  onConfirm?: () => void
  cancelLabel?: string
  onCancel?: () => void
}

export interface IDialogActions {
  open: () => void
  close: () => void
}
