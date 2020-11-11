import React from "react"
import ReactDOM from "react-dom"
import { Container } from "shards-react"
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./index.css"
import Chat from "chat/Chat"

const App = () => (
	<Container>
		<p>Random text, don't pay attention to this.</p>
		<h1>Chat</h1>
		<Chat />
		<p>
			This chat widget is a completely separate component (thus not local),
			exposed by webpack, using the ModuleFederationPlugin, and imported in this
			application.
		</p>
	</Container>
)

ReactDOM.render(<App />, document.getElementById("app"))
