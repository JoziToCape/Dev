//post the info using ajax 
$(document).ready(function() {
	   
	  $('#addProduct').submit(function(event) {
	      var serialNumber = $('#serialNumber').val();
	      var productName = $('#productName').val();
	      var startDate = $('#startDate').val();
	      var endDate = $('#endDate')
	      var bridgeunitserial = $('#bridgeunitserial').val();
	      var faxunit = $('#faxunit').val();
	      var onebintrayserial = $('onebintrayserial').val();
	      var finisher = $('finisher').val();
	      var ltcserial = $('ltcserial').val();
	      var credenzaserial = $('credenzaserial').val();
	      var additionalPaperTrays = $('additionalPaperTrays').val();	     
	      var json = { "Product Name" : productName, "Serial No" : serialNumber};
	      
	      var selected = new Array();

	      $(document).ready(function() {

	        $("input:checkbox[name=type]:checked").each(function() {
	             selected.push($(this).val());
	        });

	      });
 
	    $.ajax({
	        url: $("#addProduct").attr( "action"),
	        data: JSON.stringify(json),
	        type: "POST",	         
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader("Accept", "application/json");
	            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(product) {
	            var respContent = "";
	             
	            respContent += "<span class='success'>Product was added [";
	            respContent += product.productName + " : ";
	            respContent += product.serialNumber + " : ""]</span>";	             
	            
	            $("#addProductResponse").html(respContent);         
	        },
	        error: function (textStatus, errorThrown) {
                Success = false;//doesnt goes here
             }
	    });
	      
	    event.preventDefault();
	  });
	    
});