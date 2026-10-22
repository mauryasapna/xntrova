<?php
// ========================================================
// Database Connection Configuration (db_connect.php)
// ========================================================

$host     = 'localhost';
$db_name  = 'xntrova';     // Aapke phpMyAdmin me database ka naam 'xntrova' hai
$username = 'root';        // XAMPP default username
$password = '';            // XAMPP default password (blank)

try {
    $pdo = new PDO("mysql:host={$host};dbname={$db_name};charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    // Return clean JSON error or error message
    http_response_code(500);
    echo json_encode([
        'status'  => 'error',
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit;
}
?>
