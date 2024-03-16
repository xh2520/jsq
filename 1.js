<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>每周返佣工资计算器</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }

        input[type="number"], input[type="checkbox"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        #result {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>每周返佣工资计算器</h1>
        <div class="form-group">
            <label for="teamSize">团队人数：</label>
            <input type="number" id="teamSize" value="100">
        </div>
        <div class="form-group">
            <label for="positionAmount">每人仓位（万元）：</label>
            <input type="number" id="positionAmount" value="10">
        </div>
        <div class="form-group">
            <label for="weeklyBet">每人每周下注额：</label>
            <input type="number" id="weeklyBet" value="11000">
        </div>
        <div class="form-group">
            <label for="multiplyByFive">众志成城翻五倍：</label>
            <input type="checkbox" id="multiplyByFive">
        </div>
        <button onclick="calculateCommission()">计算</button>
        <div id="result"></div>
    </div>

    <script>
        function calculateCommission() {
            const teamSize = parseFloat(document.getElementById("teamSize").value);
            const positionAmount = parseFloat(document.getElementById("positionAmount").value);
            const weeklyBet = parseFloat(document.getElementById("weeklyBet").value);
            const multiplyByFive = document.getElementById("multiplyByFive").checked;
            let commissionRate = 0;

            if (teamSize >= 100000) {
                commissionRate = 0.09;
            } else if (teamSize >= 30000) {
                commissionRate = 0.08;
            } else if (teamSize >= 10000) {
                commissionRate = 0.07;
            } else if (teamSize >= 5000) {
                commissionRate = 0.06;
            } else if (teamSize >= 3000) {
                commissionRate = 0.05;
            } else if (teamSize >= 1000) {
                commissionRate = 0.04;
            } else if (teamSize >= 500) {
                commissionRate = 0.03;
            } else if (teamSize >= 100) {
                commissionRate = 0.02;
            } else if (teamSize >= 50) {
                commissionRate = 0.015;
            } else if (teamSize >= 30) {
                commissionRate = 0.012;
            } else if (teamSize >= 10) {
                commissionRate = 0.008;
            } else if (teamSize >= 5) {
                commissionRate = 0.005;
            }

            let totalCommission = teamSize * positionAmount * weeklyBet * commissionRate;

            // 如果勾选了众志成城翻五倍，则乘以五
            if (multiplyByFive) {
                totalCommission *= 5;
            }

            // 根据不同仓位流水调整返佣工资
            if (positionAmount >= 10000 && positionAmount < 20000) {
                totalCommission *= 1.1;
            } else if (positionAmount >= 20000 && positionAmount < 30000) {
                totalCommission *= 2.22;
            } else if (positionAmount >= 30000 && positionAmount < 50000) {
                totalCommission *= 3.33;
            } else if (positionAmount >= 50000 && positionAmount < 100000) {
                totalCommission *= 5.2;
            } else if (positionAmount >= 100000 && positionAmount < 200000) {
                totalCommission *= 11;
            } else if (positionAmount >= 200000 && positionAmount < 300000) {
                totalCommission *= 22.22;
            } else if (positionAmount >= 300000 && positionAmount < 500000) {
                totalCommission *= 33.33;
            } else if (positionAmount >= 500000 && positionAmount < 1000000) {
                totalCommission *= 52;
            } else if (positionAmount >= 1000000 && positionAmount < 2000000) {
                totalCommission *= 110;
            } else if (positionAmount >= 2000000 && positionAmount < 3000000) {
                totalCommission *= 222.22;
            } else if (positionAmount >= 3000000 && positionAmount < 5000000) {
                totalCommission *= 333.33;
            } else if (positionAmount >= 5000000 && positionAmount < 10000000) {
                totalCommission *= 520;
            } else if (positionAmount >= 10000000) {
                totalCommission *= 1100;
            }

            document.getElementById("result").innerHTML = "总的每周返佣工资为：" + totalCommission.toFixed(2) + "元";
        }
    </script>
</body>
</html>
