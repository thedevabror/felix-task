import axios from './api'

const BookService = {
    async bookGet() {
		const {data} = await axios.get('/books')
		return data
	},
	async bookCreate(values) {
		const {data} = await axios.post('/books', values)
		return data
	},
	async bookDelete(id) {
		const {data} = await axios.delete(`/books/${id}`)
		return data
	},
	async bookEdit(bookId, values) {
		const {data} = await axios.put(`/books/${bookId}`, values)
		return data
	},
}

export default BookService