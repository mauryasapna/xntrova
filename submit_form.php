<?php
// ========================================================
// Form Submission Handler (submit_form.php)
// Handles incoming form data and saves it to MySQL database
// ========================================================

// 1. Allow Cross-Origin Requests (CORS) for Next.js / React dev servers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Accept");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/db_connect.php';

// Support JSON payloads (from fetch / Axios in React/Next.js)
$rawInput = file_get_contents('php://input');
if (!empty($rawInput)) {
    $jsonData = json_decode($rawInput, true);
    if (is_array($jsonData)) {
        $_POST = array_merge($_POST, $jsonData);
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

// 2. Anti-Spam Check: Honeypot field (website_url)
if (!empty($_POST['website_url'])) {
    header('Content-Type: application/json');
    echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully!']);
    exit;
}

// 3. Extract & Sanitize Data
$name    = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email   = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone   = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$company = isset($_POST['company']) ? trim(strip_tags($_POST['company'])) : '';
$service = isset($_POST['service']) ? trim(strip_tags($_POST['service'])) : '';
// Accepts both 'message' and 'ownWords'
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';
if (empty($message) && isset($_POST['ownWords'])) {
    $message = trim(strip_tags($_POST['ownWords']));
}

// 4. Validation
$errors = [];
if (empty($name)) {
    $errors[] = 'Name is required.';
}
if (empty($phone) && empty($email)) {
    $errors[] = 'Either phone number or email is required.';
}

if (!empty($errors)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'errors' => $errors]);
    exit;
}

// 5. Capture Client IP Address
$ip_address = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip_list = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
    $ip_address = trim($ip_list[0]);
}

// 6. Insert Into Database
try {
    $sql = "INSERT INTO `form_leads` 
            (`name`, `email`, `phone`, `company`, `service`, `message`, `ip_address`) 
            VALUES (:name, :email, :phone, :company, :service, :message, :ip_address)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name'       => $name,
        ':email'      => !empty($email) ? $email : null,
        ':phone'      => !empty($phone) ? $phone : null,
        ':company'    => !empty($company) ? $company : null,
        ':service'    => !empty($service) ? $service : null,
        ':message'    => !empty($message) ? $message : null,
        ':ip_address' => $ip_address
    ]);

    $insertId = $pdo->lastInsertId();

    header('Content-Type: application/json');
    echo json_encode([
        'status'   => 'success',
        'message'  => 'Details saved successfully!',
        'lead_id'  => $insertId
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'status'  => 'error',
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
