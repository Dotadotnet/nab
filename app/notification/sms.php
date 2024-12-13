<?php
namespace App\notification;
use Melipayamak\MelipayamakApi;
class sms{
    private static $password = 'Amir@1385';
    private static $username = '19999935106';
    private static $nummber = '50002710035106';
    public static function send($text,$phone){
        $api = new MelipayamakApi(self::$username,self::$password);
        $sms = $api->sms();
        $to = $phone;
        $text = $text;
        $from = self::$nummber;
        $response = $sms->send($to,$from,$text);
        $json = json_decode($response);
        return $json;
    }
}