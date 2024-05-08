"use client"

import React from 'react'

import {Layout} from '@ui/layout'
import {Box} from '@ui/layout'
import {Circle} from '@ui/progress'

const Page = () => {
    return <>
        <Circle percent={25}/>
        <Layout>
            <Box>
                <p>Hello</p>
            </Box>
        </Layout>
    </>
}

export default Page
