<?php
// ========================================================
// View All Submitted Leads (Admin / Quick Check)
// ========================================================
require_once __DIR__ . '/db_connect.php';

try {
    $stmt = $pdo->query("SELECT * FROM `form_leads` ORDER BY `created_at` DESC");
    $leads = $stmt->fetchAll();
} catch (PDOException $e) {
    die("Database Error: " . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submitted Leads - Xntrova</title>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; margin: 0; }
        .container { max-width: 1200px; margin: 0 auto; background: #1e293b; border-radius: 12px; padding: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        h1 { margin-top: 0; color: #38bdf8; display: flex; justify-content: space-between; align-items: center; }
        .badge { font-size: 0.9rem; background: #0284c7; padding: 4px 10px; border-radius: 9999px; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #334155; font-size: 0.92rem; }
        th { background: #0f172a; color: #94a3b8; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em; }
        tr:hover { background: #334155; }
        .empty { text-align: center; padding: 2rem; color: #94a3b8; }
        .tag { background: #059669; color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; }
    </style>
</head>
<body>
<div class="container">
    <h1>
        <span>📋 Form Submissions / Leads</span>
        <span class="badge">Total: <?= count($leads) ?></span>
    </h1>

    <?php if (empty($leads)): ?>
        <p class="empty">Koi submissions nahi mili abhi tak. Form submit karke check karein!</p>
    <?php else: ?>
        <div style="overflow-x: auto;">
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Service</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($leads as $row): ?>
                        <tr>
                            <td><strong>#<?= htmlspecialchars($row['id']) ?></strong></td>
                            <td><?= htmlspecialchars($row['name']) ?></td>
                            <td><a href="mailto:<?= htmlspecialchars($row['email']) ?>" style="color:#38bdf8;"><?= htmlspecialchars($row['email']) ?></a></td>
                            <td><?= htmlspecialchars($row['phone'] ?? '-') ?></td>
                            <td><?= htmlspecialchars($row['company'] ?? '-') ?></td>
                            <td><?= htmlspecialchars($row['service'] ?? '-') ?></td>
                            <td style="max-width: 250px;"><?= nl2br(htmlspecialchars($row['message'] ?? '-')) ?></td>
                            <td><span class="tag"><?= htmlspecialchars($row['status']) ?></span></td>
                            <td><?= htmlspecialchars($row['created_at']) ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    <?php endif; ?>
</div>
</body>
</html>
