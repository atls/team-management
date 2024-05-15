'use client'

import React from 'react'
import {useState} from 'react'

import {Dropdown} from '@ui/dropdown'
import {TestIcon} from '@ui/icons-test'
import {Input} from '@ui/input'
import {BaseSwitch} from '@ui/switch'
import {IconSwitch} from '@ui/switch'
import {ThemeSwitch} from '@ui/switch'
import {ThemeProvider} from '@ui/theme'
import {Modal} from '@ui/modal'

// eslint-disable-next-line no-console
const placeholder = () => console.log('placeholder')
const Page = () => {
	const [modal, setModal] = useState(false)
	const modalClick = () => {
		setModal(!modal)
	}
	return (
		// TODO экспорт белых иконок с прозрачным фоном
		<ThemeProvider>
			<Input placeholder='placeholder' />
			<BaseSwitch />
			<IconSwitch>
				<TestIcon width={16} height={16} color='white' />
			</IconSwitch>
			<ThemeSwitch />
			<Dropdown onChange={placeholder} items={['first item', 'second item', 'third item']} />
			<div onClick={modalClick} style={{width: 400, height: 300, backgroundColor: 'red'}}>
				<h1>click to show modal</h1>
				<Modal open={modal}>
					<h1>content in modal</h1>
					<Input placeholder='placeholder' />
				</Modal>
			</div>
		</ThemeProvider>
	)
}
export default Page
