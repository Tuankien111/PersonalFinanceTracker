<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected AuthService $authService;

    /**
     * Khởi tạo AuthController với AuthService.
     * @param AuthService $authService
     */
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function show()
    {
        $result = $this->authService->show() | false;
        if(!$result){
             return response()->json([
            'success' => $result,
            'message' => 'Can access to Service'
        ], status: 404);
        }
        return response()->json([
            'success' => $result,
            'message' => 'Hello'
        ], 200);
    }
}
