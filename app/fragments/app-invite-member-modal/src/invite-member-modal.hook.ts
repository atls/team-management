import { useEffect }               from 'react'

import { HandleAddInputClickType } from './invite-member-modal.interfaces.js'
import { HandlerSwitchType }       from './invite-member-modal.interfaces.js'
import { changeButtonHook }        from './hooks/index.js'
import { sendInviteEmailHook }     from './hooks/index.js'

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
  }, [checkedSwitches, inputValues])

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
    const selectedInvites = []

    for (const checkedSwitch of checkedSwitches) {
      try {
        new URL(checkedSwitch)
        selectedInvites.push(checkedSwitch)
      } catch (_) {
        ghOrgName = checkedSwitch
      }
    }

    try {
      if (ghOrgName) {
        // TODO
        // отправить запрос на отправление инвайта гитхаб
      }
      if (selectedInvites.length) {
        await sendInviteEmailHook({ emails: inputValues, selectedInvites })
      }
      setInviteButtonState('successed')
    } catch (e: any) {
      console.error(e)
      console.log(e)
      toast.error(e.message, e.code)
    }
  }

  return { switchHandler, addInputClickHandler, inviteButtonClickHandler }
}
