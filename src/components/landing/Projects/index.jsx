import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => (
	<StaticQuery
		query={graphql`
			{
				github {
					repositoryOwner(login: "davidkensell") {
						repositories(
							first: 8
							orderBy: { field: STARGAZERS, direction: DESC }
						) {
							edges {
								node {
									id
									name
									url
									description
					                languages(
					                	first:5
					                	orderBy: { field: SIZE, direction: DESC }
					                	) {
						                    edges {
						                      node {
						                      	id
						                        name
						                        color
						                      }
						                    }
						                  }
									homepageUrl
									stargazers {
										totalCount
									}
									forkCount
								}
							}
						}
					}
				}
			}
		`}
		render={({
			github: {
				repositoryOwner: {
					repositories: { edges },
				},
			},
		}) => (
			<Wrapper as={Container} id="projects">
				<h2>Public Projects</h2>
				<Grid>
					{edges.map(({ node }) => (
						<Item
							key={node.id}
							as="a"
							href={node.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card>
								<Content>
									<h4>{node.name}</h4>
									<p>{node.description}</p>
									<p>
										{node.languages.edges.map(({ node }) => (
											<span key={node.id} style={{ color: node.color }}>{node.name} </span>
										))}
									</p>
								</Content>
								<Stats>
									{node.homepageUrl && <p><a href={node.homepageUrl} target="_blank" rel="noopener noreferrer">demo</a></p>}
								</Stats>
							</Card>
						</Item>
					))}
				</Grid>
			</Wrapper>
		)}
	/>
)
