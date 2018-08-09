<?php 

class Point
{
    public $x;
    public $y;
    public $label;
    function __construct()
    {
        $this->x = intval(rand(-50, 50));
        $this->y = intval(rand(-50, 50));
    }
}
class Network
{
    public $points = [];
    public $neurons = [];
    function __construct($NeuronCount)
    {
        for ($i = 0; $i < 12; $i++) {
            array_push($this->points, new Point());
        }
        for ($i = 0; $i < $NeuronCount; $i++) {
            array_push($this->neurons, new Neuron(count($this->points)));
        }
    }
    public function learn($count)
    {
        for ($i = 0; $i < $count; $i++) {
            for ($j = 0; $j < count($this->points); $j++) {
                if ($this->points[$j]->x != 1 && $this->points[$j]->y != 1) {
                    for ($k = 0; $k < count($this->neurons); $k++) {

                        $this->neurons[$k]->proceed($this->points[$j], $j);
                    }
                    if ($this->neurons[0]->sum[$j] == 0 && $this->neurons[1]->sum[$j] > 0) {
                        $this->neurons[0]->increase($j);
                        $this->neurons[1]->increase($j);
                    } else {
                        $this->neurons[0]->decrease($j);
                        $this->neurons[1]->decrease($j);
                    }
                }
            }
        }
    }
    public function answer()
    {
        for ($i = 0; $i < count($this->points); $i++) {
            if ($this->neurons[0]->sum[$i] == 0 &&
                $this->neurons[1]->sum[$i] == 0) {
                $this->points[$i]->label = "first";
            } elseif ($this->neurons[0]->sum[$i] == 0 &&
                $this->neurons[1]->sum[$i] >= 1) {
                $this->points[$i]->label = "second";
            } elseif ($this->neurons[0]->sum[$i] >= 1 &&
                $this->neurons[1]->sum[$i] == 0) {
                $this->points[$i]->label = "third";
            } else
                $this->points[$i]->label = "four";
        }
    }
}
class Neuron
{
    public $weightsX;
    public $weightsY;
    public $sum = [];
    public $bias = 1;
    function __construct($pointsCout)
    {
        for ($i = 0; $i < $pointsCout; $i++) {
            $this->weightsX[$i] = rand(1, 10);
            $this->weightsY[$i] = rand(1, 10);
        }
    }
    public function proceed($point, $key)
    {
        $temp = 0;
        $temp += ($point->x * $this->weightsX[$key]) + ($point->y * $this->weightsY[$key]);
        if ($temp > $this->bias)
            $this->sum[$key] = $temp;
        else $this->sum[$key] = 0;
    }
    public function decrease($key)
    {
        $this->weightsX[$key]--;
        $this->weightsY[$key]--;
    }
    public function increase($key)
    {
        $this->weightsX[$key]++;
        $this->weightsY[$key]++;
    }
}
$neuron = new Network(2);
echo '<pre>';
var_dump($neuron);
echo '/<pre>';
$neuron->learn(100000);
echo '<pre>';
var_dump($neuron);
echo '/<pre>';
$neuron->answer();
//echo json_encode($neuron->points);
