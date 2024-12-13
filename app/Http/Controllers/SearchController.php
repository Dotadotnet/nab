<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Category;
use App\Models\Product;
use App\search\google;
use App\search\search;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use voku\helper\HtmlDomParser;

class SearchController extends Controller
{
   public function search_data($page, $size, $input)
   {
      $data = Product::get();
      for ($i = 0; $i < count($data); $i++) {
         $data[$i]['category'] = Category::find($data[$i]['category'])->name;
         $data[$i]['img'] = json_decode($data[$i]['img'])[0];
         $data[$i]['url'] = route('shortLink', ['id' => $data[$i]['id']]);
         unset($data[$i]['created_at']);
         unset($data[$i]['updated_at']);
      }
      $search = new search(['name' => 8, 'category' => 10, 'caption' => 4], $page, $size);
      $search->setData($data);
      $result = $search->search($input);
      return $result;
   }
   public function search($page, $size, $input)
   {
      return response($this->search_data($page, $size, $input));
   }
   public function google($input)
   {
      $google = new google($input, 'شیرینی');
      return response($google->get_sentence());
   }
   public function view($pagintion, $input)
   {
      $data = Product::get();
      for ($i = 0; $i < count($data); $i++) {
         $data[$i]['category'] = Category::find($data[$i]['category'])->name;
         $data[$i]['img'] = json_decode($data[$i]['img'])[0];
         $data[$i]['price'] = Helper::price($data[$i]['price']);
         $data[$i]['url'] = route('shortLink', ['id' => $data[$i]['id']]);
         unset($data[$i]['created_at']);
         unset($data[$i]['updated_at']);
      }
      $search = new search(['name' => 8, 'category' => 10, 'caption' => 4], $pagintion , 10);
      $search->setData($data);
      $result = $search->search($input);
      $google = new google($input, 'شیرینی');
      $pagintion_count = (int)(count(Product::all()) / 10);
      if(count(Product::all()) % 10){
         $pagintion_count++;
      }
      return view('user.search', ["data" => $result, "sentence" => $google->get_sentence(),'pagintion' =>   $pagintion_count , 'this_page' => $pagintion , 'input' => $input]);
   }
}
