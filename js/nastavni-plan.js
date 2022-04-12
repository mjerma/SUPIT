const search = document.getElementById("search-subject");
const table = document.getElementById("subject-table");
const source = "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan";
const subjectsURL = "http://www.fulek.com/VUA/supit/GetKolegij/";
const ectsElement = document.getElementById("sum-ects");
const hoursElement = document.getElementById("sum-hours");
var ectsSum = 0;
var hoursSum = 0;

$(document).ready(function () {
    $.ajax({
        url: source,
        type: "GET",
        dataType: "json",
        success: function (data) {
            let array = $.map(data, function (data) {
                return { id: data.value, value: data.label }
            })
            $(search).autocomplete({
                source: array,
                minLength: 1,
                select: function (event, ui) {
                    addNewRow(subjectsURL + ui.item.id);
                }
            });
            //Override default filtera od autocomplete widgeta
            $.ui.autocomplete.filter = function (array, term) {
                var matcher = new RegExp('(^)' + $.ui.autocomplete.escapeRegex(term), 'i');
                return $.grep(array, function (value) {
                    return matcher.test(value.label || value.value || value);
                });
            };
        },
    });
    function addNewRow(info){
        $.getJSON(info, function(subjectInfo){
            ectsSum += subjectInfo.ects;
            hoursSum += subjectInfo.sati;
            let newTableRow = 
            '<tr class="subject-row">' +
                '<td class="subject-table-item subject-w" scope="col">' + subjectInfo.kolegij + '</td>' +
                '<td class="subject-table-item ects ects-w" scope="col">' + subjectInfo.ects + '</td>' +
                '<td class="subject-table-item hours hours-w" scope="col">' + subjectInfo.sati + '</td>' +
                '<td class="subject-table-item p-w" scope="col">' + subjectInfo.predavanja + '</td>' +
                '<td class="subject-table-item v-w" scope="col">' + subjectInfo.vjezbe + '</td>' +
                '<td class="subject-table-item tip-w" scope="col">' + subjectInfo.tip + '</td >' +
                '<td class="subject-table-item" scope="col"><input type="button" class="btn-delete" value="Obriši"></td>' +
            '</tr>';
            ectsElement.innerHTML = ectsSum;
            hoursElement.innerHTML = hoursSum;
            $(table).append(newTableRow);
            $(table).find('#sum-row').detach().appendTo(table);
            $('#subject-table').show();
        })
    }
});

$('#subject-table').on('click', '.btn-delete', function() { 
    var sumSubtract = $(this).closest('tr').find('.ects').text();
    var hourSubtract = $(this).closest('tr').find('.hours').text();
    ectsSum -= sumSubtract;
    hoursSum -= hourSubtract;
    ectsElement.innerHTML = ectsSum;
    hoursElement.innerHTML = hoursSum;
    $(this).closest('tr').remove();
});








