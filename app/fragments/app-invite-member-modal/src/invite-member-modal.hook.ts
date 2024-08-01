import { useEffect }                from 'react'

import { HandleAddInputClickType }  from './invite-member-modal.interfaces.js'
import { HandlerSwitchType }        from './invite-member-modal.interfaces.js'
import { sendInviteEmailGhApiHook } from './hooks/index.js'
import { changeButtonHook }         from './hooks/index.js'
import { sendInviteEmailHook }      from './hooks/index.js'

export const InviteMemberModalHook = ({
  toast,
  checkedSwitches,
  setCheckedSwitches,
  inputValues,
  setInputValues,
  setInviteButtonState,
}) => {
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

  const inviteButtonClickHandler = async () => {
    let ghOrgName = ''
    const selectedInvites: Array<string> = []

    for (const checkedSwitch of checkedSwitches) {
      try {
        // eslint-disable-next-line no-new
        new URL(checkedSwitch)
        selectedInvites.push(checkedSwitch)
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
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.error(e)
      toast.error(e.message, e.code)
    }
  }

  return { switchHandler, addInputClickHandler, inviteButtonClickHandler }
}
