import { useEffect }               from 'react'

import { HandleAddInputClickType } from './invite-member-modal.interfaces.js'
import { HandlerSwitchType }       from './invite-member-modal.interfaces.js'
import { changeButtonHook }        from './hooks/index.js'

export const InviteMemberModalHook = ({
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

  const inviteButtonClickHandler = () => {
    setInviteButtonState('successed')
    console.log('invite')
  }

  return { switchHandler, addInputClickHandler, inviteButtonClickHandler }
}
