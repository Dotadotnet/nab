<?php

use App\Models\Config;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('configs', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('amount')->nullable();
            $table->timestamps();
        });
        $keys = ['limit_buy' => null, 'price_send' => null, 'favorites' => '[]'];
        sleep(5);
        foreach ($keys as $key => $value) {
                $modal = new Config();
                $modal->key = $key;
                $modal->amount = $value;
                $modal->save();
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('configs');
    }
};
