<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

use App\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todo = Todo::all();

        $data = [
            'hai' => Auth::user()->name,
            'todolist' => $todo,
        ];

        return response()->json($data, 200);
    }
}
