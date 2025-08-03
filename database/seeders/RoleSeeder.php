<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;



class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);

        // Assign 'admin' role to a specific user
        $admin = User::where('email', 'eprfaizan@gmail.com')->first();
        if ($admin) {
            $admin->assignRole('admin');
        }

        // Assign 'user' role to all users with role field = 'user'
        User::where('role', 'user')->get()->each(function ($user) {
            $user->assignRole('user');
        });
    }
}
