import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

const ProjectsPage = ({ data: {allStrapiProjects: {nodes:projects}} }) => {
  return <Layout>
    <SEO title="Projects" description="My projects and projects that I have been involved in"/>
    <section className="projects-page">
      <Projects projects={projects} title="all projects"/>
    </section>
  </Layout>
}

export default ProjectsPage
