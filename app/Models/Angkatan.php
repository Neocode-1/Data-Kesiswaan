<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Angkatan extends Model
{
    /** @use HasFactory<\Database\Factories\AngkatanFactory> */
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function raport() 
    {
        return $this->hasMany(Raport::class);
    }

    public function ijazah() 
    {
        return $this->hasMany(Ijazah::class);
    }

    public function siswa() 
    {
        return $this->hasMany(Siswa::class);
    }

    public function prestasi() 
    {
        return $this->hasMany(Prestasi::class);
    }
}
