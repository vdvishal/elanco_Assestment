import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/Layout";

function App() {
	useEffect(() => {});
	return (
		<div className="App">
			<BrowserRouter>
				<AppLayout></AppLayout>
			</BrowserRouter>
		</div>
	);
}

export default App;
