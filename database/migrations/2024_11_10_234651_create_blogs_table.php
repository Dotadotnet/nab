<?php

use App\Models\Blog;
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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            // $table->string('admin');
            $table->longText('amount');
            $table->string('title');
            $table->timestamps();
        });
        sleep(5);
        $blog = new Blog();
        $blog->title = 'درباره ما';
        $blog->amount = '...';
        $blog->save();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
       
        Schema::dropIfExists('blogs');
    }
};
