<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestasi extends Model
{
    /** @use HasFactory<\Database\Factories\PrestasiFactory> */
    use HasFactory;

    protected $fillable = [
        'nama', 'nama_prestasi', 'tingkat', 'foto_up', 'tahun'
    ];

    public function angkatan() 
    {
        return $this->belongsTo(Angkatan::class);
    }

    public function tahun() 
    {
        return $this->belongsTo(Prestasi::class);
    }
}
