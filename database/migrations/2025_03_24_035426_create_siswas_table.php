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
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nisn')->unique();
            $table->date('ttl');
            $table->enum('jenis_kelamin', ['L', 'P']);
            $table->string('agama');
            $table->string('sklh_asal');
            $table->date('tgl_masuk');
            $table->date('tgl_keluar')->nullable();
            $table->string('status_klrga');
            $table->integer('anak_ke');
            $table->string('alamat');
            $table->string('telp_rumah')->nullable();
            $table->string('status_pip')->nullable();
            $table->string('nama_ortu')->nullable();
            $table->string('alamat_ortu')->nullable();
            $table->string('no_telp')->nullable();
            $table->string('pekerjaan')->nullable();
            $table->string('nama_wali')->nullable();
            $table->string('alamat_wali')->nullable();
            $table->string('pekerjaan_wali')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswas');
    }
};
