<?php

class Book 
{
    private $title;

    private $author;

    private $numPages;

    protected $expire = 30; // days

    public function __construct(string $title, string $author, int $numPages) {
        $this->title = $title;
        $this->author = $author;
        $this->numPages = $numPages;
    }

    public function getExpire(): int
    {
        return $this->expire;
    }

}


class Dictionary extends Book
{
    protected $expire = 60;

    private $linguaDizionario;

    public function setLinguaDizionario($linguaDizionario) {
        $this->linguaDizionario = $linguaDizionario;
    }

    public function getLinguaDizionario() {
        return $this->linguaDizionario;
    }
}


class Vocabolary extends Dictionary
{

}

class Manual extends Book
{

}

/**
 * Paper di ricerca universitaria
 */
class Paper extends Book
{
    protected $expire = 45;
}

$dict = new Dictionary('Dizionario Italiano', 'Zanichelli', 2000);
$dict->setLinguaDizionario('Italiano');
echo $dict->getExpire() . '<br/>';


$vocab = new Vocabolary('Vocabolario Italiano', 'Dizionario Autore', 2000);
$vocab->setLinguaDizionario('Italiano');
var_dump($vocab);