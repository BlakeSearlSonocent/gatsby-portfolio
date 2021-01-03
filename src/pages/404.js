import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
    <SEO title="Not Found" description="This page does not exist"/>
    <main className="error-page">
      <div className="error-container">
        <h1>this page doesn't exist :(</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </main>
  </Layout>
}

export default Error
