$(function () {

  $('.pop').popover({
    html: true,
    content: function() {
      return $(this).children('.popover').html();
    }
  });

  $('.status').addClass('fa fa-circle');
  $(".alert").hide();
  $(".alert").alert();


  $('.datepicker').datetimepicker({
    pickTime: false,
    format:'DD/MM/YYYY',
    icons:{
      date: 'fa fa-calendar',
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down"
    }
  });

  $('.timepicker').datetimepicker({
    pickDate: false,
    format:'HH:mm',
    useCurrent: false,
    icons:{
      date: 'fa fa-calendar',
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down"
    }
  });

  //$('.dataTable').DataTable();

  $('.dataTable').DataTable({
    "sDom": 'T<"clear">lfrtip',
    "oTableTools": {
      "sSwfPath": "/media/swf/copy_csv_xls_pdf.swf"
    },
      "oLanguage": {
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar _MENU_ registros",
          "sZeroRecords":    "No hay registros",
          "sEmptyTable":     "No hay registros",
          "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty":      "Mostrando 0 registros de 0",
          "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix":    "",
          "sSearch":         "Buscar:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
              "sFirst":    "Primero",
              "sLast":     "Último",
              "sNext":     "Siguiente",
              "sPrevious": "Anterior"
          },
          "oAria": {
              "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      }
  });


});

function Validate(){
  var oli = document.getElementById('oli').value;
  if (oli != 'kaizen'){
    window.confirm('Contraseña o usuario incorrectos');
  } else {
    document.location.href = '/home';
  }

}


