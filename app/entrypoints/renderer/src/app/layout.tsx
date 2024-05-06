import React from "react";

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}
        <p>This is Layout</p>
        </body>
        </html>
    )
}