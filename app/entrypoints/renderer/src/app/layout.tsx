import BaseRootLayout from '@app/root-layout'

import messages       from '../../locales/ru.json'

const RootLayout = ({ children }) => <BaseRootLayout messages={messages}>{children}</BaseRootLayout>

export default RootLayout
