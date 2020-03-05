const Book = require("../models/Model");

module.exports = {
    async show(request, response) {
        const books = await Book.find();

        return response.json(books);
    },

    async store(request, response) {
        const { title, author, type } = request.body;

        // Check if a book already exist in the database
        let book = await Book.findOne({ title, author });

        if (!book) {
            book = await Book.create({
                title,
                author,
                type,
            });
            console.log(new Date() + " novo livro adicionado.");
        }

        return response.json(book);
    },

    async update(request, response) {
        const { id } = request.params;
        const { title, author, type } = request.body;

        const bookUpdate = {
            title,
            author,
            type,
        };

        await Book.findByIdAndUpdate(id, bookUpdate, (error) => {
            if (error) {
                console.log("Erro ao atualizar o livro\n");
                throw error;
            }
            else {
                console.log(new Date() + " livro atualizado");
                return response.json({ message: "Livro atualizado" });
            }
        });
    },

    async destroy(request, response) {
        const { id } = request.params;
        console.log(request.params);

        const book = await Book.findByIdAndDelete(id, (error) => {
            if (error) {
                console.log("Erro ao deletar o livro\n");
                throw error;
            } else {
                console.log(new Date() + " livro deletado");
                return response.json({ message: 'Livro removido' });
            }
        });
    }
}