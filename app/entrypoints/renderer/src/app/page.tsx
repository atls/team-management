'use client'

import React from 'react'

import {ThemeProvider} from '@ui/theme'
import {Input} from '@ui/input'
import {Switch} from '@ui/switch'

const Page = () => {
	return (
		<ThemeProvider>
			<Input placeholder='input-placeholder' />
			<Switch />
		</ThemeProvider>
	)
}

export default Page
