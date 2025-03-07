import type { InviteButtonStateType }   from '@app/invite-button'
import type { ToastType }               from '@stores/toast-notification'
import type { Dispatch }                from 'react'
import type { SetStateAction }          from 'react'

import type { HandleAddInputClickType } from './invite-member-modal.interfaces.js'
import type { InviteMemberModalOutput } from './invite-member-modal.interfaces.js'
import type { HandlerSwitchType }       from './invite-member-modal.interfaces.js'

import { useEffect }                    from 'react'

import { sendInviteEmailGhApiHook }     from './hooks/index.js'
import { changeButtonHook }             from './hooks/index.js'
import { sendInviteEmailHook }          from './hooks/index.js'

export const InviteMemberModalHook = ({
  toast,
  checkedSwitches,
  setCheckedSwitches,
  inputValues,
  setInputValues,
  setInviteButtonState,
}: {
  toast: ToastType
  checkedSwitches: Array<string>
  setCheckedSwitches: Dispatch<SetStateAction<Array<string>>>
  inputValues: Array<string>
  setInputValues: Dispatch<SetStateAction<Array<string>>>
  setInviteButtonState: (buttonState: InviteButtonStateType) => void
}): InviteMemberModalOutput => {
  useEffect(() => {
    changeButtonHook({ inputValues, checkedSwitches, setInviteButtonState })
  }, [checkedSwitches, inputValues, setInviteButtonState])

  const switchHandler: HandlerSwitchType = (state, category) => {
    if (checkedSwitches.includes(category as never)) {
      setCheckedSwitches(checkedSwitches.filter((c: string) => c !== (category as never)))
    } else {
      setCheckedSwitches(checkedSwitches.concat([category as never]))
    }
  }

  const addInputClickHandler: HandleAddInputClickType = () => {
    setInputValues(inputValues.concat(''))
  }

  const inviteButtonClickHandler = async (): Promise<void> => {
    let ghOrgName = ''
    const selectedInvites: Array<string> = []

    for (const checkedSwitch of checkedSwitches) {
      try {
        // eslint-disable-next-line no-new
        new URL(checkedSwitch)
        selectedInvites.push(checkedSwitch)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        ghOrgName = checkedSwitch
      }
    }

    try {
      if (ghOrgName) {
        sendInviteEmailGhApiHook({ document, inputValues, ghOrgName, toast })
      }
      if (selectedInvites.length) {
        sendInviteEmailHook({ emails: inputValues, selectedInvites, toast })
      }
      setInviteButtonState('successed')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error(e)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      toast.error(e.message, e.code)
    }
  }

  return { switchHandler, addInputClickHandler, inviteButtonClickHandler }
}
