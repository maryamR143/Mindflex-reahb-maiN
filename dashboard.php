<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Dashboard</title>
    <!-- Linking to an external CSS library for stylinggggggggggggggg -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        .navbar {
            background-color: #333;
            color: white;
            padding: 10px;
        }

        .navbar .brand {
            font-size: 1.5em;
            font-weight: bold;
        }

        .navbar .menu {
            float: right;
        }

        .navbar .menu a {
            color: white;
            text-decoration: none;
            margin-left: 15px;
        }

        .sidebar {
            width: 200px;
            background-color: #f8f9fa;
            padding: 15px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            overflow-y: auto;
        }

        .sidebar a {
            text-decoration: none;
            display: block;
            padding: 10px;
            color: #333;
            margin-bottom: 5px;
        }

        .sidebar a:hover {
            background-color: #ddd;
        }

        .content {
            margin-left: 220px;
            padding: 20px;
        }

        .card {
            background-color: white;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="navbar">
        <span class="brand">Dashboard</span>
        <div class="menu">
            <a href="#"><i class="fas fa-user"></i> Profile</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
        </div>
    </div>

    <div class="sidebar">
        <a href="#"><i class="fas fa-tachometer-alt"></i> Overview</a>
        <a href="#"><i class="fas fa-chart-line"></i> Analytics</a>
        <a href="#"><i class="fas fa-users"></i> Users</a>
        <a href="#"><i class="fas fa-cogs"></i> Settings</a>
    </div>

    <div class="content">
        <div class="card">
            <h3>Card Title 1</h3>
            <p>This is a card with some content.</p>
        </div>
        <div class="card">
            <h3>Card Title 2</h3>
            <p>This is another card with some content.</p>
        </div>
        <div class="card">
            <h3>Card Title 3</h3>
            <p>This card has more content to display.</p>
        </div>
    </div>

    <!-- Linking to an external JavaScript library for interactions -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
