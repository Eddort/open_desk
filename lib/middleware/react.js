import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore'
import RootRouter from '../../src/routes';

import createHistory from 'history/createMemoryHistory'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default async function ({ url, initialState = {} }) {
	const res = this;
	if (process.env.NODE_ENV === 'development') {
		// const task = await Task.getNew("Из и роута реакта")
		return res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My Universal App</title>
				</head>
				<body>
					<div id='app'></div>
					<script>window.__initialState__ = ${ JSON.stringify(initialState) }</script>
					<script src='/app.bundle.js'></script>
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
						<StaticRouter location={url} context={{}}>
							<RootRouter/>
						</StaticRouter>
					</Provider>
				</StyleSheetManager>
			
		)
		const styleTags = sheet.getStyleTags()
		return res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My Universal App SSR</title>
					<link rel='stylesheet' href='/bundle.css'>
					${styleTags}
				</head>
				<body>
					<div>SSR</div>
					<div id='app'>${reactInst}</div>
					<script>window.__initialState__ = ${ JSON.stringify(initialState) }</script>
					<script src='/app.bundle.js'></script>
				</body>
			</html>
		`);
	}
}
