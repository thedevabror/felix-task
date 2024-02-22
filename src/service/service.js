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
	async bookEdit(id, edit) {
		const {data} = await axios.put(`/books/${id}`, edit)
		return data
	},
}

export default BookService