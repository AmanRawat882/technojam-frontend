import './App.css';
import React, { Fragment, useState, useContext } from 'react';
import { TopMenu, Footer } from './Components/Layouts';
import Maincontent from './Components/Maincontent';
import AuthContext from './context/auth/AuthState';
import AlertContext from './context/alert/AlertState';
import { Hidden, Fab, Icon } from '@material-ui/core';

const sectionStyle = {
	backgroundImage:
		'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)',
	backgroundRepeat: 'repeat',
	backgroundPositionX: 'center',
	position: 'absolute',
	width: '100%',
	top: '0'
};

const fabPosition = {
	bottom: '10vh',
	position: 'fixed',
	margin: '1em',
	right: '8vw'
};

function App() {
	const [panel, setPanel] = useState(false);
	//const [] = useState({ mode: 'light' });

	function toggleButton() {
		if (!panel) setPanel(true);
		else setPanel(false);

		if (panel === false) {
			document.getElementById('ToggleButton').style.background = '#161625';
		}
	}

	return (
		<div className='dark-mode'>
			<div className='App ' style={sectionStyle}>
				<AuthContext>
					<AlertContext>
						<TopMenu toggleButton={toggleButton} />
						<Maincontent />
						<br />
						<br />
						<br />
						<Footer />
					</AlertContext>
				</AuthContext>
				<Hidden smUp>
					<div style={fabPosition}>
						<Fab color='secondary' onClick={() => window.scrollTo(0, 0)}>
							<Icon
								fontSize='inherit'
								style={{ height: 'auto' }}
								className='fas fa-chevron-up'
							/>
						</Fab>
					</div>
				</Hidden>
			</div>
		</div>
	);
}
export default App;
