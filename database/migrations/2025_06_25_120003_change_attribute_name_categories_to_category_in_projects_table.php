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
        Schema::table('projects', function (Blueprint $table) {
            // Drop foreign key first
            $table->dropForeign(['categories_id']);

            // Rename the column
            $table->renameColumn('categories_id', 'category_id');
        });

        // Re-add the foreign key
        Schema::table('projects', function (Blueprint $table) {
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->renameColumn('category_id', 'categories_id');
        });

        Schema::table('projects', function (Blueprint $table) {
            $table->foreign('categories_id')->references('id')->on('categories')->onDelete('set null');
        });
    }
};
