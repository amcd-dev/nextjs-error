

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>Next.js</title>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0"/>
        </head>

        <body>
            <div>
                {children}
            </div>
        </body>
        </html>
    );
}