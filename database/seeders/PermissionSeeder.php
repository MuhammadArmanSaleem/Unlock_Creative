<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'services.index',
            'services.create',
            'services.store',
            'services.show',
            'services.edit',
            'services.update',
            'services.destroy',
            'categories.index',
            'categories.create',
            'categories.store',
            'categories.show',
            'categories.edit',
            'categories.update',
            'categories.destroy',
            'projects.index',
            'projects.create',
            'projects.store',
            'projects.show',
            'projects.edit',
            'projects.update',
            'projects.destroy',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
