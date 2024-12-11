<?php
// Start session and ensure the user is logged in as admin
session_start();
if (!isset($_SESSION['user_role']) || $_SESSION['user_role'] !== 'admin') {
    header('Location: login.php');
    exit;
}

// Dummy data for training classes
$training_classes = [
    'family-mediation-training' => 'Family Mediation Training',
    'civil-mediation-training' => 'Civil Mediation Training',
    'family-to-civil-training' => 'Family to Civil Mediation Training',
    'civil-to-family-training' => 'Civil to Family Mediation Training',
    'domestic-violence-training' => 'Domestic Violence Mediation Training'
];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel - Alexis Mediation</title>
</head>
<body>
    <h2>Admin Panel</h2>
    <p>Welcome, Tusca! <a href="logout.php">Logout</a></p>

    <h3>Manage Training Classes</h3>
    <ul>
        <?php foreach ($training_classes as $class_id => $class_name): ?>
            <li>
                <?php echo $class_name; ?>
                <a href="https://alexismediation.com/includes/administration.php?id=edit&class=<?php echo $class_id; ?>">Edit</a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
