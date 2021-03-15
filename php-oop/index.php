<?php 


class Automobile {

    public $motore;

    public $cerchi;

    public $telaio;

    public $cambio;

    public $nome;

    /** int $serbatoio */
    private $serbatoio = 20;  // numero di litri 

    public $serbatoioMax = 100;

    public function __construct($motore, $cerchi, $telaio, $cambio, $nome) {
        $this->motore = $motore;
        $this->cerchi = $cerchi;
        $this->telaio = $telaio;
        $this->cambio = $cambio;
        $this->nome = $nome;
    }

    // getter
    public function getSerbatoio() 
    {
        return $this->serbatoio;
    }

    // setter 
    public function fillSerbatoio($diesel) 
    {
        $this->serbatoio += $diesel;
    }

    public function isSerbatoioFull() {
        return $this->serbatoio === $this->serbatoioMax;
    }

}

$mito = new Automobile('jtd 16', '16"', 'tubolare', 'automatico', 'alfa mito');
echo $mito->motore . '<br/>';
echo $mito->getSerbatoio() . '<br/>';

if(!$mito->isSerbatoioFull()) {
    // il massimo del serbatoio meno quanti litri ci sono adesso nel serbatoio
    $diesel = $mito->serbatoioMax - $mito->getSerbatoio();
    $mito->fillSerbatoio($diesel);
}

echo $mito->getSerbatoio() . '<br/>';
