<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->boolean("page_id");
            $table->integer("user_id");
            $table->boolean("status");
            $table->timestamp('time')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->text("name");
            $table->text("text");
            $table->text("page");
            $table->longText("replay")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
