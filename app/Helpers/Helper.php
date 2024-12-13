<?php

namespace App\Helpers;

use App\Models\Product;
use PhpParser\Node\Scalar\Float_;
use App\Models\Config;

class Helper
{
    public static function say_my_hate()
    {
        echo 'kir to konkor';
    }
    public static function price(int $price): string
    {
        $price = ceil($price / 1000) * 1000;
        $type = ['', 'هزار', 'میلیون', 'میلیارد', 'تیلیارد'];
        $price_len = strlen((string)$price);
        $select_3_3 = ceil($price_len / 3);
        $result_array = [];
        for ($i = 0; $i < $select_3_3; $i++) {
            $num =  substr(strrev((string)$price), $i * 3, 3);
            if ((int)$num) {
                array_push($result_array, '<span style="white-space: nowrap;">' . '<span>' . " " . (string)(int)strrev($num) . " " . '</span>'  . $type[$i] . '</span>');
            }
        }
        return  implode("<span  style='text-align:center;margin:0px 4px'> و </span>", array_reverse($result_array)) . '<span>تومان<span/>';
    }
    public static function type_sell($type_sell_db): string
    {
        switch ($type_sell_db) {
            case 'numerical':
                return 'دونه ای';
                break;
            case 'weight':
                return 'کیلویی';

                break;
            default:
                return '';
                break;
        }
    }
    public static function str_split_utf8(string $string): array
    {
        return preg_split('//u', $string, -1, PREG_SPLIT_NO_EMPTY);
    }
    public static function analyzeData($data)
    {
        $configs = Config::all();
        $all_price = 0;
        for ($i = 0; $i < count($data); $i++) {
            $data[$i] = (array)$data[$i];
            $product = Product::find($data[$i]['id'])->toArray();
            foreach ($product as $key => $value) {
                $data[$i][$key] = $value;
            }
            $data[$i]['type'] = $data[$i]['type'] === 'numerical' ? 'عدد' : 'کیلو';
            $data[$i]['price'] = ($data[$i]['off'] ? $data[$i]['price'] - ($data[$i]['price'] / 100) * $data[$i]['off'] : $data[$i]['price']);
            $data[$i]['result_price'] = (float)$data[$i]['price'] * (float)$data[$i]['count'];
            $all_price += $data[$i]['result_price'];
            $data[$i]['result_price'] = Helper::price($data[$i]['result_price']);
            $data[$i]['price'] = Helper::price($data[$i]['price']);
        }
        if((int)$configs[0]->amount > $all_price){
            $all_price = ceil($all_price / 1000) * 1000;
            $all_price += (int)$configs[1]->amount;
          }
        return (['data' => $data, 'result' => Helper::price($all_price), 'int_price' => $all_price]);
    }
    public static function getIp(): string
    {
        if (isset($_SERVER['HTTP_CF_CONNECTING_IP'])) { // Cloudflare support
            $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
        } elseif (isset($_SERVER['REMOTE_ADDR']) === true) {
            $ip = $_SERVER['REMOTE_ADDR'];
            if (preg_match('/^(?:127|10)\.0\.0\.[12]?\d{1,2}$/', $ip)) {
                if (isset($_SERVER['HTTP_X_REAL_IP'])) {
                    $ip = $_SERVER['HTTP_X_REAL_IP'];
                } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
                }
            }
        } else {
            $ip = '127.0.0.1';
        }
        if (in_array($ip, ['::1', '0.0.0.0', 'localhost'], true)) {
            $ip = '127.0.0.1';
        }
        $filter = filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4);
        if ($filter === false) {
            $ip = '127.0.0.1';
        }

        return $ip;
    }

    public static function numberFaChar(int $number)
    {
        $array_number = [
            'هیچی',
            'اول',
            'دوم',
            'سوم',
            'چهارم',
            'پنجم',
            'شیشم',
            'هفتم',
            'هشتم',
            'نهم',
            'دهم',
            'یازدهم',
            'دوازدهم',
            'سیزدهم',
            'چهاردهم',
            'پانزدهم',
        ];
        return $array_number[$number];
    }
}
