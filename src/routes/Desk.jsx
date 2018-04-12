import React from 'react';
import { Route, Switch } from 'react-router'
import Desk from '../containers/Desk'
//формирует сетку для дашборда
import DashBoardWrapper from '../components/DashBoardWrapper'

const Router =  () => (
    <DashBoardWrapper>
			<Switch>
				{/* <Route path="/auth" component={Auth}/> */}
				<Route exact path="/desk" component={Desk}/>
			</Switch>
    </DashBoardWrapper>
); 

export default Router