<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['reacts', 'views']);
        });
    }

    /**
     * Reverse the migrations (not needed in your case).
     */
    public function down(): void
    {
        // No rollback logic needed
    }
};
