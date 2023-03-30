var itemValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var priceValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: itemValues,
        datasets: [{
            backgroundColor: barColors,
            data: priceValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "World Wine Production 2018"
        }
    }
});

/************************************************** */



/***************table*********************/
$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    });