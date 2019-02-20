import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/scrum.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<h1>Let's talk about your project.</h1>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
		</Thumbnail>
	</Wrapper>
)
