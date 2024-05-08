"use client"

import React from 'react'
import {ThemeProvider} from '@ui/theme'
import {Input} from '@ui/input'

const Page = () => {
	return (
		<ThemeProvider>
			<Input
				placeholder='input-placeholder'
			/>
		</ThemeProvider>
	)

}

export default Page
