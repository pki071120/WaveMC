import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Sub1, Sub2, Sub3, Check } from "./page";
import { useState } from "react";

function App() {
	const [isMuted, setIsMuted] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);
	return (
		<>
			<GlobalStyle />
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<Check
									setIsMuted={setIsMuted}
									isTransitioning={isTransitioning}
									setIsTransitioning={setIsTransitioning}
								/>
							}
						/>
						<Route
							path="/main"
							element={<Sub1 isMuted={isMuted} setIsMuted={setIsMuted} />}
						/>
						<Route
							path="/trailer"
							element={<Sub2 isMuted={isMuted} setIsMuted={setIsMuted} />}
						/>
						<Route
							path="/villages"
							element={<Sub3 isMuted={isMuted} setIsMuted={setIsMuted} />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
