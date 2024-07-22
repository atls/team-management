import React              from 'react'
import { FC }             from 'react'
import { useEffect }      from 'react'
import { useIntl }        from 'react-intl'

import { SelectInput }    from '@ui/input'
import { useSelectInput } from '@ui/input'

// TODO interface
export const GithubUsersSearch: FC<any> = () => {
  const { formatMessage } = useIntl()

  const inputValue = useSelectInput()

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <SelectInput
      placeholder={formatMessage({ id: 'add-member-to-organization-modal_input.placeholder' })}
      // parentHook={setSelectedUsers}
    />
  )
}
