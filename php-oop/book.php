<?php

class Book 
{
    public $title;
    
    public $author;
    
    public $numPages;

    public function __construct($title, $author, $numPages)
    {
        $this->title = $title;
        $this->author = $author;
        $this->numPages = $numPages;
    }

}

class Biblioteca
{
    public $name;

    private $books = [];

    public function __construct($name) {
        $this->name = $name;
    }

    public function addBook(Book $book) {
        $this->books[] = $book;
    }

    public function getBooks() {
        return $this->books;
    }
}


$promessiSposi = new Book('I Promessi Sposi', 'Alessandro Manzoni', '500');
// var_dump($promessiSposi);

$nuovaBiblioteca = new Biblioteca('Nuova Biblioteca');

$nuovaBiblioteca->addBook($promessiSposi);

// questo darebbe errore perché giornaletto è string, non è una istanza di Book
// $nuovaBiblioteca->addBook('giornaletto');

print_r($nuovaBiblioteca->getBooks());
