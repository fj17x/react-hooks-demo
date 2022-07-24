import React from 'react'
import State from './components/State';
import styled from 'styled-components';
import Effect from './components/Effect';
import Reducer from './components/Reducer';
import Ref from './components/Ref';
import './styles/App.css'
import LayoutEffect from './components/LayoutEffect';
import Context from './components/Context';
import Memo from './components/Memo';
import Callback from './components/Callback'

function App() {
	return (
		<>
			<Margin>
				<State />
			</Margin>
			<Margin>
				<Effect />
			</Margin>
			<Margin>
				<LayoutEffect />
			</Margin>
			<Margin>
				<Reducer />
			</Margin>
			<Margin>
				<Ref />
			</Margin>
			<Margin>
				<Context />
			</Margin>
			<Margin>
				<Memo />
			</Margin>
			{/* <Margin>
				<Callback />
			</Margin> */}
		</>
	)
}

const Margin = styled.div`
border: 1px solid black;
display:flex;
justify-content: center;
align-items: center;
margin:1px;
padding:2px;
`

export default App