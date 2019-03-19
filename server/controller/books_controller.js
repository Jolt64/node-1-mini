const books = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res ) => {
        const { title, author } = req.body
        let newBook = {
            id,
            title,
            author
        }
        books.push(newBook)
        id++
        res.status(200).send(books)
    },
    update: (req, res) => {
        let index = null
        const { id } = req.params
        const { title, author } = req.body
        books.forEach((book, i) => {
            if(book.id === id * 1) {
                index = i
            }
        })
        books[index] = {
            id: books[index].id,
            title: title || books[index].title,
            author: author || books[index].author
        }
        res.status(200).send(books)
    },
    delete: (req, res) => {
        const { id } = req.params
        let index = null

        books.forEach((book, i) => {
            if(book.id === id * 1) {
                index = i
            }
        })
        books.splice(index, 1)
        // delete books[index]
        res.status(200).send(books)

    }
}