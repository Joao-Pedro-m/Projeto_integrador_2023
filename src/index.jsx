import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
	<Auth0Provider
		domain="dev-ud6jyly0gjem6ula.us.auth0.com"
		clientId="FBJGMdW8r6rlm6FJ2A1JvANWeHli96oL"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);