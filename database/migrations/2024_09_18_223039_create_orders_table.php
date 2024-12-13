<?php

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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id");
            $table->string('price');
            $table->string("order");
            $table->string('unit')->nullable();
            $table->string('plate')->nullable();
            $table->string('postal_code',10)->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->string('caption')->nullable();
            $table->string('time_send')->nullable();
            $table->string('status')->nullable();
            $table->string('color')->nullable();
            $table->string('invoice')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
         Schema::dropIfExists('orders');
    }
};
