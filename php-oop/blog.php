<?php 

class Post
{
    protected $title;

    protected $text;

    protected $author;
    
    public function __construct(User $author, string $title, string $text) {

        if(!$author instanceof Writer) {
           throw new Exception('User has not permissions.');  // sollevare eccezione
        }


        $this->author = $author;
        $this->title = $title;
        $this->text = $text;
    }

    public function getTitle() {
        return $this->title;
    }

    public function getText() {
        return $this->text;
    }

    public function setTitle(User $author, string $title) {

        if($author instanceof Author) {
            $this->title = $title;
        } else {
            throw new Exception('User has not permissions.');  // sollevare eccezione
        }

    }

    public function setText(string $text) {
        $this->text = $text;
    }

}



class User {

    protected $name;

    protected $surname;

    protected $username;

    private $password;

    public function __construct(string $name, string $surname, string $username, string $password) {
        $this->name = $name;
        $this->surname = $surname;
        $this->username = $username;
        $this->password = $password;
    }

}


class Author extends User {

}


class Reader extends User {

}


class Writer extends Author {

}

class Proofreader extends Author {

}


// creaiamo nuovo post

$proofreader = new Proofreader('Gino', 'Paoli', 'gino@paoli.it', 'gino2021');


try {
    $post = new Post($proofreader, 'La mia canzone bellissima', 'Mi illumino d\'immenso');
} catch (Exception $e) {
    echo "L'utente non ha i permessi giusti per creare un nuovo articolo";
}

$writer = new Writer('Pippo', 'Baudo', 'pippo@paoli.it', 'pippo2012');
$post = new Post($writer, 'La mia canzone bellissima', 'Mi illumino d\'immenso');

echo "<br/><br/>";

echo $post->getTitle();

echo "<br/><br/>";

$post->setTitle($proofreader, 'Questo è il mio nuovo titolo modificato dal proofreader');

echo $post->getTitle();

echo "<br/><br/>";

var_dump($post);