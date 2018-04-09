import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore'
import Root from '../src/containers/Root';

import createHistory from 'history/createMemoryHistory'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import { Task } from '../model'

export default async (req, res) => {
	if (process.env.NODE_ENV === 'development') {
		const task = await Task.getNew("Из и роута реакта")
		return res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My Universal App</title>
				</head>
				<body>
				${task}
					<div id='app'></div>
					<script src='app.bundle.js'></script>
				</body>
			</html>
		`);
	} else {
		const history = createHistory()
		const store = configureStore(history)
		const sheet = new ServerStyleSheet()
		const reactInst = renderToString(
				<StyleSheetManager sheet={sheet.instance}>
					<Provider store={store}>
						<StaticRouter location={req.url} context={{}}>
							<Root />
						</StaticRouter>
					</Provider>
				</StyleSheetManager>
			
		)
		const styleTags = sheet.getStyleTags()
		res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My Universal App SSR</title>
					<link rel='stylesheet' href='bundle.css'>
					${styleTags}
				</head>
				<body>
                <div>SSR</div>
					<div id='app'>${reactInst}</div>
					<script src='app.bundle.js'></script>
				</body>
			</html>
		`);
	}
};
