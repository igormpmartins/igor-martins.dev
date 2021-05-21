import React from 'react'
import Layout from '../components/layout'
import '../css/styles.css'

const AppPrinc = ({Component, pageProps}) => {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default AppPrinc