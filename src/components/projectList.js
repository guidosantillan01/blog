import React from "react"

import Project from "../components/project"
import projects from "../data/projects"

import projectListStyles from "./styles/projectList.module.scss"

const ProjectList = () => {
  return (
    <div className={projectListStyles.container}>
      {projects.map(
        ({
          title,
          description,
          tech,
          category,
          imageUrl,
          githubUrl,
          liveUrl,
          showProject,
        }) => {
          return (
            showProject && (
              <Project
                key={title}
                title={title}
                description={description}
                tech={tech}
                category={category}
                githubUrl={githubUrl}
                liveUrl={liveUrl}
                imageUrl={imageUrl}
              />
            )
          )
        }
      )}
    </div>
  )
}

export { ProjectList as default }
