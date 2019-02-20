import React from 'react'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/activity.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Charts illustration. Everybody loves charts." />
			</Thumbnail>
			<Details>
				<h1>Want to know more?</h1>
				<p>
					I've spent well over a decade working the interwebs: as a project manager, digital marketer, writer, and front-end web developer.
				</p>
				<a href="https://www.linkedin.com/in/davidkensell/" target="_blank" rel="noopener noreferrer">
					<Button>
						LinkedIn
					</Button>
				</a>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
