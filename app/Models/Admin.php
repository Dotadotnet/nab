<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;
    protected $guard = 'admin';
    protected $fillable = [
        'name', 'last_name', 'meli_code', 'phone', 'img', 'password'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $attributes = [
        'is_super_admin' => 0,
    ];
}
