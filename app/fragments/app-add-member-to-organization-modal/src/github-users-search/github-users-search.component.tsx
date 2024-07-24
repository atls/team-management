import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'
import { useEffect }            from 'react'
import { useIntl }              from 'react-intl'

import { SelectInput }          from '@ui/input'
import { useSelectInput }       from '@stores/select-input'
import { useToast }             from '@stores/toast-notification'

import { GithubUserSearchType } from './github-users-search.interface.js'
import { getSearchedUsers }     from './hooks/index.js'
import { inputChangeHook }      from './hooks/index.js'

export const GithubUsersSearch: FC<GithubUserSearchType> = ({ setSelectedUsersParentHook }) => {
  const { formatMessage } = useIntl()
  const toast = useToast

  const [isClientTyping, setClientTyping] = useState<boolean>(false)
  const [activeSearchTimeoutId, setActiveSearchTimeoutId] = useState<number>(0)

  const selectInput = useSelectInput()

  const { inputValue } = selectInput
  const { selectedItems } = selectInput
  const { setSuggestedItems } = selectInput
  const { cleanSuggestedItems } = selectInput

  useEffect(() => {
    inputChangeHook({
      isClientTyping,
      setClientTyping,
      activeSearchTimeoutId,
      setActiveSearchTimeoutId,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  useEffect(() => {
    if (!isClientTyping && inputValue) {
      const suggestUsers = async () => {
        const suggestedItems = await getSearchedUsers({ searchQuery: inputValue, toast })
        setSuggestedItems(suggestedItems)
      }

      suggestUsers()
    } else if (!inputValue.length) {
      cleanSuggestedItems()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClientTyping])

  useEffect(() => {
    setSelectedUsersParentHook(selectedItems)
  }, [selectedItems, setSelectedUsersParentHook])

  return (
    <SelectInput
      placeholder={formatMessage({ id: 'add-member-to-organization-modal_input.placeholder' })}
    />
  )
}
