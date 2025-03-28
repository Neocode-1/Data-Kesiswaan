<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Klarifikasi extends Model
{
    /** @use HasFactory<\Database\Factories\KlarifikasiFactory> */
    use HasFactory;

    protected $fillable = [
        'tahun_masuk'
    ];
}
