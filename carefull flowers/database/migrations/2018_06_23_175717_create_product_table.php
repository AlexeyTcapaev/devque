<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('catalog_id')->nullable();
            $table->string('description')->nullable();
            $table->string('slug');
            $table->string('options')->nullable();
            $table->string('image')->nullable();
            $table->string('name')->unique();
            $table->decimal('currentprice', 9, 2);
            $table->decimal('oldprice', 9, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
