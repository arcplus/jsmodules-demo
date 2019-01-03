import * as grpc from 'grpc';
import * as book_grpc_pb from './proto/book_grpc_pb';
import * as book_pb from './proto/book_pb';

const bookData = {
    id1: {
        title: 'book1',
        author: 'author1'
    },
    id2: {
        title: 'book2',
        author: 'author2'
    }
};

class BookService implements book_grpc_pb.IBookServiceServer {
    getBook(call: grpc.ServerUnaryCall < book_pb.GetBookRequest > ,
        callback: grpc.sendUnaryData < book_pb.GetBookResponse > ) {
        const bookId = call.request.getId();

        const response = new book_pb.GetBookResponse();
        const book = new book_pb.Book();
        book.setTitle(bookData[bookId].title);
        book.setAuthor(bookData[bookId].author);
        response.setBook(book);

        callback(null, response);
    }
}

function serverStart() {
    const server = new grpc.Server();
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.addService(book_grpc_pb.BookServiceService, new BookService());

    server.start();
}

serverStart();