import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import Home from './components/Home';
import Books from './components/Books';
import Book from './components/Book';
import NewBook from './components/NewBook';

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/books">

						<Route index element={<Book />} />
						<Route path=":id" element={<Book />} />
						<Route path="new" element={<NewBook />} />
					</Route>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
