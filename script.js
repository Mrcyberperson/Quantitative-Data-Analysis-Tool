function analyzeData() {
    const dataInput = document.getElementById('dataInput').value;
    const dataArray = dataInput.split(',').map(item => parseFloat(item.trim()));
    
    const sum = ss.sum(dataArray);
    const mean = ss.mean(dataArray);
    const min = ss.min(dataArray);
    const max = ss.max(dataArray);
    const range = ss.max(dataArray) - ss.min(dataArray);
    const median = ss.median(dataArray);
    const variance = ss.variance(dataArray);
    const standardDeviation = ss.standardDeviation(dataArray);

    // Display statistics in table
    document.getElementById('sum').textContent = sum;
    document.getElementById('mean').textContent = mean;
    document.getElementById('min').textContent = min;
    document.getElementById('max').textContent = max;
    document.getElementById('range').textContent = range;
    document.getElementById('median').textContent = median;
    document.getElementById('variance').textContent = variance;
    document.getElementById('stdDev').textContent = standardDeviation;

    // Create a bar chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sum', 'Mean', 'Minimum', 'Maximum', 'Range', 'Median', 'Variance', 'Standard Deviation'],
            datasets: [{
                label: 'Descriptive Statistics',
                data: [sum, mean, min, max, range, median, variance, standardDeviation],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
