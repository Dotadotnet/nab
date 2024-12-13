<?php

namespace app\search;

use Xtompie\Sorter\Sort;
use Xtompie\Sorter\Sorter;

class search
{
    private $data = null;
    private $rules;
    private $pagination;
    private $size;
    public function __construct($rules, $pagination = null, $size = null)
    {
        $this->rules = $rules;
        if ($size && $pagination) {
            $this->size = $size;
            $this->pagination = (int)$pagination - 1;
        }
    }
    public function setData($data)
    {
        $data = is_array($data) ? $data : $data->toArray();
        $fillds_data = array_keys($data[0]);
        $fillds_rule = array_keys($this->rules);
        $diffrend = array_diff($fillds_rule, $fillds_data);
        if (!empty($diffrend)) {
            throw new \Exception("The entered data does not comply with the law");
        }
        $this->data = $data;
    }
    public function search($input): array
    {
        if (!$this->data) {
            throw new \Exception("You have not entered any data yet. Enter your data using the <b>setData()</b> function");
        }
        $data = $this->data;
        $rule = array_keys($this->rules);
        $rules = $this->rules;
        $words_input = explode(' ', trim($input));

        for ($i = 0; $i < count($data); $i++) {
            $point = 0;
            foreach ($data[$i] as $filld => $value) {
                if (in_array($filld, $rule)) {
                    foreach ($words_input as $word_input) {
                        if (str_contains($value, $word_input)) {
                            $point += $rules[$filld];
                        }
                    }
                }
            }
            $data[$i]['point'] = $point;
        }
        $data_result = [];
        foreach ($data as $item) {
            if ($item['point'] > 3)
                array_push($data_result, $item);
        }
        $data_result = (new Sorter())([Sort::ofKey("point", SORT_DESC)], $data_result,);
        //    dd($data);
        if ($this->size && is_int($this->pagination)) {
            $data_result = array_slice($data_result, $this->pagination * $this->size, $this->size);
        }
        return $data_result;
    }
}
