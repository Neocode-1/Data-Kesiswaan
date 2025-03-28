<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Raport extends Model
{
    /** @use HasFactory<\Database\Factories\RaportFactory> */
    use HasFactory;
    protected $fillable = [
        'user_id',
        'upload_file',
        'catatan'
    ];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    public function angkatan() {
        return $this->belongsTo(Angkatan::class);
    }

    public function tahun() 
    {
        return $this->belongsTo(Tahun::class);
    }
}
