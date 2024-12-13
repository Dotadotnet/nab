<?php

use App\Models\Admin;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string("name", 128);
            $table->string("last_name", 128);
            $table->string("phone", 11);
            $table->string("meli_code", 10);
            $table->string("password");
            $table->string("img", 514);
            $table->string("remember_token", 514);
            $table->boolean("is_super_admin");
            $table->timestamps();
        });
        sleep(5);
        Storage::copy('img/default/karfarma_defult.jpg', 'img/admins/karfarma_defult.jpg');
        $admin = new Admin();
        $admin->name = 'کارفرما';
        $admin->last_name = '  ';
        $admin->phone = '09917240849';
        $admin->password = 'amirali 14';
        $admin->meli_code = '0250614456';
        $admin->remember_token = '';
        $admin->img ='img/admins/karfarma_defult.jpg';
        $admin->is_super_admin = 1;
        $admin->save();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
