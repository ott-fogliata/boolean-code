<?php 


class Automobile {

    public $motore;

    public $cerchi;

    public $telaio;

    public $cambio;

    public $nome;

    public function __construct($motore, $cerchi, $telaio, $cambio, $nome) {
        $this->motore = $motore;
        $this->cerchi = $cerchi;
        $this->telaio = $telaio;
        $this->cambio = $cambio;
        $this->nome = $nome;
    }

}


$mito = new Automobile('jtd 16', '16"', 'tubolare', 'automatico', 'alfa mito');
echo $mito->cambio;
