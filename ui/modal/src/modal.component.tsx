import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {FunctionComponent} from 'react'
import {PropsWithChildren} from 'react'
import {ReactElement} from 'react'

import {Portal} from '@atls-ui-parts/portal'

import {useState} from 'react'

import {Backdrop} from './backdrop'
import {Container} from './container'
import {ChildContainer} from './child-container'
import {ModalProps} from './modal.interfaces'

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({children, open, onClose}) => {

	if (open) {
		return (
			<Portal>
				<Container>
					<Backdrop />
					<ChildContainer onClick={e => e.stopPropagation()}>
						{children}
					</ChildContainer>
				</Container>
			</Portal >
		)
	}
}

export {Modal}

