import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => ( 
    <Layout>
    <SEO title="Services" />
    <h1>Services</h1>
    <p>This is it!</p>
    <p>   Now go build something great.</p>
    <p>   Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default ServicesPage