<?php
// Start session and ensure the user is logged in as admin
session_start();
if (!isset($_SESSION['user_role']) || $_SESSION['user_role'] !== 'admin') {
    header('Location: ../login.php');
    exit;
}

// Get the class from the URL
$class = isset($_GET['class']) ? $_GET['class'] : null;

// Dummy data for training classes
$training_classes = [
    'family-mediation-training' => 'Family Mediation Training',
    'civil-mediation-training' => 'Civil Mediation Training',
    'domestic-violence-mediation-training' => 'Domestic Violence Mediation Training'
];

// Check if the class is valid
if (!array_key_exists($class, $training_classes)) {
    die('Invalid class specified.');
}

// Handle form submission for editing
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Update class details (in a real app, save to database)
    $updated_name = $_POST['class_name'];
    echo "<p>Class updated: $updated_name</p>";
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit <?php echo $training_classes[$class]; ?></title>
</head>
<body>
    <h2>Edit <?php echo $training_classes[$class]; ?></h2>
    <form method="POST">
        <label for="class_name">Class Name:</label>
        <input type="text" name="class_name" value="<?php echo $training_classes[$class]; ?>" required>
        <br>
        <button type="submit">Save Changes</button>
    </form>
    <a href="../administration.php">Back to Admin Panel</a>
</body>
</html>
