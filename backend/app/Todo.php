<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $guarded = [''];

    public function category()
    {
        return $this->hasOne(Category::class);
    }
}
